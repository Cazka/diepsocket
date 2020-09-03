module.exports = {
    id: 2,
    type: 'spawn',
    parse(parser) {
        const name = parser.string();
        return {
            name,
        };
    },
    build(builder) {
        const { name } = builder._packet.content;

        builder.vu(this.id);
        builder.string(name);
        return builder.out();
    },
};
