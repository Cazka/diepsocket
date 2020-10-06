module.exports = {
    id: 1,
    type: 'input',
    parse(parser) {
        const flags = parser.vu();
        const mouseX = parser.vf();
        const mouseY = parser.vf();
        if (flags & (1 << 9)) {
            const velocityX = parser.vf();
            const velocityY = parser.vf();
            return {
                flags,
                mouseX,
                mouseY,
                velocityX,
                velocityY,
            };
        }
        return {
            flags,
            mouseX,
            mouseY,
        };
    },
    build(builder) {
        const { flags, mouseX, mouseY, velocityX, velocityY } = builder._packet.content;

        builder.vu(this.id);
        builder.vu(flags);
        builder.vf(mouseX);
        builder.vf(mouseY);
        if (flags & (1 << 9)) {
            builder.vf(velocityX);
            builder.vf(velocityY);
        }
        return builder.out();
    },
};
