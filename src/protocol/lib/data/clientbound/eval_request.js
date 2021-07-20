module.exports = {
    id: 13,
    type: 'eval_request',
    parse(parser) {
        const id = parser.vu();
        const func = parser.string();
        return {
            id,
            func,
        };
    },
    build(builder) {
        const { id, func } = builder._packet.content;

        builder.vu(this.id);
        builder.vu(id);
        builder.string(func);
        return builder.out();
    },
};
