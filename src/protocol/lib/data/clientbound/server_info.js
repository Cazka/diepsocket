module.exports = {
    id: 4,
    type: 'server_info',
    parse(parser) {
        const gamemode = parser.string();
        const region = parser.string();
        return {
            gamemode,
            region,
        };
    },
    build(builder) {
        const { gamemode, region } = builder._packet.content;

        builder.vu(this.id);
        builder.string(gamemode);
        builder.string(region);
        return builder.out();
    },
};
