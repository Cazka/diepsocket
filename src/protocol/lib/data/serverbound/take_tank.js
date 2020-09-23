module.exports = {
    id: 27, //old 9
    type: 'take_tank',
    parse(parser) {
        return {};
    },
    build(builder) {
        builder.vu(this.id);
        return builder.out();
    },
};
