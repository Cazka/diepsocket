module.exports = {
    id: 4,
    type: 'server_info',
    parse(parser) {
        const gamemode = parser.string();
        const host_region = parser.string();
        const [host, region] = host_region.split('-');
        return {
            gamemode,
            host,
            region,
        };
    },
    build(builder) {
        const { gamemode, host, region } = builder._packet.content;
        const host_region = host + '-' + region;

        builder.vu(this.id);
        builder.string(gamemode);
        builder.string(host_region);
        return builder.out();
    },
};
