module.exports = {
    id: 3,
    type: 'upgrade_stat',
    parse(parser) {
        const id = parser.vi();
        const level = parser.vi();
        return {
            id,
            level,
        };
    },
    build(builder) {
        const { id, level } = builder._packet.content;

        builder.vu(this.id);
        builder.vi(id);
        builder.vi(level);
        return builder.out();
    },
};
