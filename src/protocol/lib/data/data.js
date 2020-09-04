const fs = require('fs');
const path = require('path');

const CLIENTBOUND = retrieveDataSpecs(path.join(__dirname, 'clientbound'));
const SERVERBOUND = retrieveDataSpecs(path.join(__dirname, 'serverbound'));

/**
 * retrieve and validate the dataSpecs in that path.
 * @param {String} dataPath the path for the dataSpecs
 */
function retrieveDataSpecs(dataPath) {
    const dataSpecs = {};
    const files = fs.readdirSync(dataPath);
    for (let i = 0; i < files.length; i++) {
        const filePath = path.join(dataPath, files[i]);
        const data = require(filePath);
        //check if interface is implemented
        if (!usesInterface(data)) throw new Error(`${filePath}: does not match the interface`);
        //check if type and filename matches
        if (files[i] !== data.type + '.js')
            throw new Error(
                `${filePath}: data.type should match the file name: ${files[i]} !== ${data.type}`
            );
        // check if id already exists
        if (dataSpecs[data.id])
            throw new Error(
                `${filePath}: ${dataSpecs[data.id].type} and ${data.type} share the same id`
            );
        dataSpecs[data.id] = data;
    }
    dataSpecs.getFromType = function (type) {
        for (let [key, value] of Object.entries(this)) {
            if (value.type === type) return this[key];
        }
        throw new Error(`cannot find: ${type}`);
    };
    return dataSpecs;
}

/**
 *  checks if dat has implemented the interface
 * @param {Object} data the data that contains the parser and builder for it packet
 */
function usesInterface(data) {
    if (!data) return false;
    if (data.id === undefined) return false;
    if (!data.type) return false;
    if (!data.parse) return false;
    if (!data.build) return false;
    return true;
}

module.exports = { SERVERBOUND, CLIENTBOUND };
