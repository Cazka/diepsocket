module.exports = {
    id: 18, //old 9
    type: 'invalid_link',
    parse(parser) {
        return {};
    },
    build(builder) {
        builder.vu(this.id);
        return builder.out();
    },
};
