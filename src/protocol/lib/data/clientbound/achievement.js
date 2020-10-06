module.exports = {
    id: 8,
    type: 'achievement',
    parse(parser) {
        const ids = [];
        for (let i = 0, n = parser.vu(); i < n; i++) {
            ids.push(parser.string());
        }
        return {
            ids,
        };
    },
    build(builder) {
        const { ids } = builder._packet.content;

        builder.vu(this.id);
        builder.vu(ids.length);
        for (let i = 0; i < ids.length; i++) {
            builder.string(ids[i]);
        }
        return builder.out();
    },
};
