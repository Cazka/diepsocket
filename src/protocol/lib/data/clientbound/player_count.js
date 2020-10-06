module.exports = {
    id: 10,
    type: 'player_count',
    parse(parser) {
        const count = parser.vu();
        return { count };
    },
    build(builder) {
        const { count } = builder._packet.content;

        builder.vu(this.id);
        builder.vu(count);
        return builder.out();
    },
};
