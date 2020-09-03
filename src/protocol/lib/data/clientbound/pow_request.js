module.exports = {
    id: 11,
    type: 'pow_request',
    parse(parser) {
        const difficulty = parser.vu();
        const prefix = parser.string();
        return {
            difficulty,
            prefix,
        };
    },
    build(builder) {
        const { difficulty, prefix } = builder._packet.content;
        builder.vu(difficulty);
        builder.string(prefix);
        return builder.out();
    },
};
