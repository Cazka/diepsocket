module.exports = {
    id: 37,//old 8
    type: 'clear_death',
    parse(parser) {
        return {};
    },
    build(builder) {
        builder.vu(this.id);
        return builder.out();
    },
};
