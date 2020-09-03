module.exports = {
    id: 7,
    type: 'extension_found',
    parse(parser) {
        return {};
    },
    build(builder) {
        builder.vu(this.id);
        return builder.out();
    },
};
