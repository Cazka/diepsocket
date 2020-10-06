module.exports = {
    id: 1,
    type: 'outdated',
    parse(parser) {
        const build = parser.string();
        return {
            build,
        };
    },
    build(builder) {
        const { build } = builder._packet.content;

        builder.vu(this.id);
        builder.string(build);
        return builder.out();
    },
};
