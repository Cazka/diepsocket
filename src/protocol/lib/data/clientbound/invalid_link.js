module.exports = {
    id: 9,
    type: 'invalid_link',
    parse(parser) {
        return {};
    },
    build(builder) {
        builder.vu(this.id);
        return builder.out();
    },
};
