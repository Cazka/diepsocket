module.exports = {
    id: 5,
    type: 'heartbeat',
    parse(parser) {
        return {};
    },
    build(builder) {
        builder.vu(this.id);
        return builder.out();
    },
};
