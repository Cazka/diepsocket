module.exports = {
    id: 8,
    type: 'clear_death',
    parse(parser) {
        return {};
    },
    build(builder) {
        builder.vu(this.id);
        return builder.out();
    },
};
