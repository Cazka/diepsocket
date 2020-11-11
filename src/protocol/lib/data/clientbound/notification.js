module.exports = {
    id: 3,
    type: 'notification',
    parse(parser) {
        const message = parser.string();
        const color = parser.u32();
        const time = parser.float();
        const unique = parser.string();
        return {
            message,
            color,
            time,
            unique,
        };
    },
    build(builder) {
        const { message, color, time, unique } = builder._packet.content;

        builder.vu(this.id);
        builder.string(message);
        builder.u32(color);
        builder.float(time);
        builder.string(unique);
        return builder.out();
    },
};
