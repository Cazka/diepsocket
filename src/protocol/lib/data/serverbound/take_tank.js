module.exports = {
    id: 9,
    type: 'take_tank',
    parse(parser) {
        return {};
    },
    build(builder) {
        builder.vu(this.id);
        return builder.out();
    },
};
