module.exports = {
    id: 11,
    type: 'eval_result',
    parse(parser) {
        const id = parser.vu();
        const result = parser.vu();
        return {
            id,
            result,
        };
    },
    build(builder) {
        const { id, result } = builder._packet.content;

        builder.vu(this.id);
        builder.vu(id);
        builder.vu(result);
        return builder.out();
    },
};
