module.exports = {
    id: 4,
    type: 'upgrade_tank',
    parse(parser) {
        const id = parser.vi();
        return {
            id,
        };
    },
    build(builder) {
        const { id } = builder._packet.content;

        builder.vu(this.id);
        builder.vi(id);
        return builder.out();
    },
};
