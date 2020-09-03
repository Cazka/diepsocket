module.exports = {
    id: 10,
    type: 'pow_result',
    parse(parser) {
        const result = parser.string();
        return {
            result,
        };
    },
    build(builder) {
        const { result } = builder._packet.content;
        builder.vu(this.id);
        builder.string(result);
        return builder.out();
    },
};
