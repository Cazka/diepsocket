module.exports = {
    id: 7,
    type: 'accept',
    parse(parser) {
        return {};
    },
    build(builder) {
        builder.vu(this.id);
        return builder.out();
    },
};
