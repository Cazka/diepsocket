const FIELDS = {
    53: { name: 'y', datatype: 'vi' },
    48: { name: 'x', datatype: 'vi' },
    43: { name: 'angle', datatype: 'vi' },
    39: { name: 'unknown', datatype: 'float' },
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
    //console.log(parser.hexdump());
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
            let field = FIELDS[prev];
            if (!field) {
                //console.log('UNKOWN FIELD ID:', prev);
                //console.log(parser.hexdump());
                break;
            }
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
    //check if arena entity gets created
    const leaderboard = parseLeaderboard(parser);
    return { id, leaderboard, parse };
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
/**
 * Parses the Leaderboard. Credits to ABC
 * @param {Parser} parser The parser
 * @returns {Array} leaderboard The leaderboard
 */
function parseLeaderboard(parser) {
    parser.at = 0;
    //packet header
    parser.vu();
    //update id
    parser.vu();
    //deletions
    for (let i = 0, n = parser.vu(); i < n; i++) {
        //entity id
        parser.vu();
        parser.vu();
    }
    //updates-creations count
    if (parser.vu() === 0) return;
    //read first entity-id
    parser.vu();
    parser.vu();
    //read update mode
    if (parser.vu() !== 1 || parser.vu() !== 9 || parser.vu() !== 6 || parser.vu() !== 1) return;
    //we have an arena entity creation
    //------------------starting here------------------
    const leaderboard = [...Array(10)].map(() => Object());
    const COLORS = {
        3: 'BLUE',
        4: 'RED',
        5: 'PURPLE',
        6: 'GREEN',
    };
    const TANKS = [
        'Tank', // 0
        'Twin',
        'Triplet',
        'Triple Shot',
        'Quad Tank',
        'Octo Tank',
        'Sniper',
        'Machine Gun',
        'Flank Guard',
        'Tri-Angle',
        'Destroyer', // 10
        'Overseer',
        'Overlord',
        'Twin-Flank',
        'Penta Shot',
        'Assassin',
        'Arena Closer',
        'Necromancer',
        'Triple Twin',
        'Hunter',
        'Gunner', // 20
        'Stalker',
        'Ranger',
        'Booster', // 23
        'Fighter',
        'Hybrid',
        'Manager',
        'Mothership',
        'Predator',
        'Sprayer',
        '', // deleted
        'Trapper',
        'Gunner Trapper',
        'Overtrapper',
        'Mega Trapper',
        'Tri-Trapper',
        'Smasher',
        '', // deleted
        'Landmine',
        'Auto Gunner',
        'Auto 5',
        'Auto 3',
        'Spread Shot',
        'Streamliner',
        'Auto Trapper',
        'Dominator', // Destroyer
        'Dominator', // Gunner
        'Dominator', // Trapper
        'Battleship',
        'Annihilator',
        'Auto Smasher',
        'Spike',
        'Factory',
        'Ball',
        'Skimmer',
        'Rocketeer',
    ];
    //leaderX
    parser.float();
    //tankIds
    for (let i = 0; i < 10; i++) {
        const tank_id = parser.vi();
        leaderboard[i].tank = TANKS[tank_id];
    }
    //unknown
    parser.vu();
    parser.float();
    parser.float();
    //labels
    for (let i = 0; i < 10; i++) {
        const label = parser.string();
        if (label.length > 0) leaderboard[i].label = label;
    }
    //unknown
    parser.vu();
    parser.float();
    //names
    for (let i = 0; i < 10; i++) {
        const name = parser.string();
        leaderboard[i].name = name;
    }
    //leaderboard length
    const leaderboard_length = parser.vu();
    //color
    for (let i = 0; i < 10; i++) {
        const color = parser.vu();
        leaderboard[i].color = COLORS[color];
    }
    //leaderY
    parser.float();
    //bottomY
    parser.float();
    //unknown
    parser.vu();
    //rightX
    parser.float();
    //topY
    parser.float();
    //leftX
    parser.float();
    //unknown
    parser.vu();
    //scores
    for (let i = 0; i < 10; i++) {
        const score = parser.float();
        leaderboard[i].score = Math.floor(score);
    }
    return leaderboard.slice(0, leaderboard_length);
}

module.exports = {
    id: 0,
    type: 'update',
    parse(parser) {
        const { id, leaderboard, parse } = parseUpdate(parser);
        return {
            id,
            leaderboard,
            parse,
        };
    },
    build(builder) {
        throw new Error('Building this packet type is not supported!');
    },
};
