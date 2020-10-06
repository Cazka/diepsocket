module.exports = {
    id: 0,
    type: 'initial',
    parse(parser) {
        const build = parser.string();
        const password = parser.string();
        const party = parser.string();
        const unknown = parser.string();
        return {
            build,
            password,
            party,
            unknown,
        };
    },
    build(builder) {
        const { build, password, party, unknown } = builder._packet.content;

        builder.vu(this.id);
        builder.string(build);
        builder.string(password);
        builder.string(party);
        builder.string(unknown);
        return builder.out();
    },
};
