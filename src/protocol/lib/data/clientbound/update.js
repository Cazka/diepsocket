const FIELDS = {
    1: { name: 'y', datatype: 'vi' },
    2: { name: 'x', datatype: 'vi' },
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
    for (let i = 0; i < arr.length; i++) {
        let found = true;
        for (let j = 0; j < query.length; j++) {
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
 * @param {Array} id The entity from our tank
 * @returns {Object} contains eiter {x, y, angle} or {parse}, where parse is a function.
 */
function locationParser(parser) {
    if (indexOf(parser.buffer, UPGRADE_ARRAY) !== -1) {
        const creationIndex = indexOf(parser.buffer, TANK_CREATION);
        parser.at = creationIndex;
        parser.rv();
        parser.rv();
        const id = Array.from(parser.buffer.slice(parser.at, creationIndex));
        return { id };
    }
    function parse(id) {
        if (!id) return;
        const updateIndex = indexOf(parser.buffer, id.concat([0, 1]));
        if (updateIndex == -1) return;

        parser.at = updateIndex + id.length + 2;
        const f = {};
        let prev = 0;
        while (parser.buffer[parser.at] !== 1) {
            prev += parser.vu() ^ 1;
            const field = FIELDS[prev];
            if (!field) break;
            f[field.name] = parser[field.datatype]();
        }
        return f;
    }
    return { parse };
}

module.exports = {
    id: 0,
    type: 'update',
    parse(parser) {
        const { id, parse } = locationParser(parser);
        return {
            id,
            parse,
        };
    },
    build(builder) {
        throw new Error('Building this packet type is not supported!');
    },
};
