const FIELDS = {
    1: { name: 'x', datatype: 'vi' },
    2: { name: 'y', datatype: 'vi' },
    3: { name: 'angle', datatype: 'vi' },
};
const UPGRADE_ARRAY = [
    77,
    111,
    118,
    101,
    109,
    101,
    110,
    116,
    32,
    83,
    112,
    101,
    101,
    100,
    0,
    82,
    101,
    108,
    111,
    97,
    100,
    0,
    66,
    117,
    108,
    108,
    101,
    116,
    32,
    68,
    97,
    109,
    97,
    103,
    101,
    0,
    66,
    117,
    108,
    108,
    101,
    116,
    32,
    80,
    101,
    110,
    101,
    116,
    114,
    97,
    116,
    105,
    111,
    110,
    0,
    66,
    117,
    108,
    108,
    101,
    116,
    32,
    83,
    112,
    101,
    101,
    100,
    0,
    66,
    111,
    100,
    121,
    32,
    68,
    97,
    109,
    97,
    103,
    101,
    0,
    77,
    97,
    120,
    32,
    72,
    101,
    97,
    108,
    116,
    104,
    0,
    72,
    101,
    97,
    108,
    116,
    104,
    32,
    82,
    101,
    103,
    101,
    110,
    0,
];
const TANK_CREATION = [1, 0, 2, 0, 5, 3, 0, 3, 1];

/**
 * Returns the index of query in arr otherwise -1
 * @param {Array} arr The array
 * @param {Array} query The query array
 */
function indexOf(arr, query) {
    if (query.length > arr.length) return -1;
    for (var i = 0; i < arr.length; i++) {
        let found = true;
        for (var j = 0; j < query.length; j++) {
            if (arr[i + j] !== query[j]) {
                found = false;
                break;
            }
        }
        if (found) return i;
    }
    return -1;
}
/**
 *
 * @returns {Object} contains {id, parse}. id is the entity id when a new gets created. parse is a function that gets the current entity id.
 */
function parseUpdate(parser) {
    //console.log(parser.debugStringFullBuffer());
    /**
     * This is the main function to parse. It requires an entity id and will return {died,x,y,angle}.
     * @param {array} id array that contains the entity id.
     */
    function parse(id) {
        const parsed = { dead: false };
        //dont parse if id is undefined;
        if (!id) return parsed;

        //check if entity gets deleted
        if (isDeleted(parser, id)) {
            parsed.dead = true;
            return parsed;
        }

        //check if entity gets updated
        const updateIndex = indexOf(parser.buffer, id.concat([0, 1]));
        if (updateIndex === -1) return parsed;

        //parse {x,y,angle} fields in updates
        parser.at = updateIndex + id.length + 2;
        let prev = 0;
        while (parser.buffer[parser.at] !== 1) {
            prev += parser.vu() ^ 1;
            const field = FIELDS[prev];
            if (!field) break;
            parsed[field.name] = parser[field.datatype]();
        }
        return parsed;
    }
    //check if new entity id gets created
    let id;
    if (indexOf(parser.buffer, UPGRADE_ARRAY) !== -1) {
        const creationIndex = indexOf(parser.buffer, TANK_CREATION);
        parser.at = creationIndex;
        parser.rv();
        parser.rv();
        id = Array.from(parser.buffer.slice(parser.at, creationIndex));
    }
    return { id, parse };
}

/**
 * checks whether the entity id gets deleted or not.
 * @param {Parser} parser the parser
 * @param {Array} id the entity id
 * @returns {Boolean} if entity id gets deleted or not
 */
function isDeleted(parser, id) {
    parser.at = 0;
    //packet header
    parser.vu();
    // update id
    parser.vu();
    // loop through deletions
    for (var i = 0, n = parser.vu(); i < n; i++) {
        const start = parser.at;
        parser.vu();
        parser.vu();
        const end = parser.at;
        const deleted = Array.from(parser.buffer.slice(start, end));
        //compare
        if (id.length !== deleted.length) continue;
        let isEqual = true;
        for (var j = 0; j < id.length; j++) {
            if (id[j] !== deleted[j]) {
                isEqual = false;
                break;
            }
        }
        if (isEqual) return true;
    }
    return false;
}

module.exports = {
    id: 0,
    type: 'update',
    parse(parser) {
        const { id, parse } = parseUpdate(parser);
        return {
            id,
            parse,
        };
    },
    build(builder) {
        throw new Error('Building this packet type is not supported!');
    },
};
