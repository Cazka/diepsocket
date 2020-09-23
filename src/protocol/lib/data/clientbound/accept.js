module.exports = {
    id: 118, //old 7
    type: 'accept',
    parse(parser) {
        return {};
    },
    build(builder) {
        builder.vu(this.id);
        return builder.out();
    },
};
