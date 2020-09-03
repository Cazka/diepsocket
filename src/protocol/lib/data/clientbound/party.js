module.exports = {
    id: 6,
    type: 'party',
    parse(parser) {
        let party = '';
        while (!parser.isEOF()) {
            let byte = parser.u8().toString(16).toUpperCase().split('');
            if (byte.length === 1) party += byte[0] + '0';
            else party += byte[1] + byte[0];
        }
        return {
            party,
        };
    },
    build(builder) {
        const { party } = builder._packet.content;

        builder.vu(this.id);
        for (let i = 0; i < party.length; i += 2) {
            let byte = parseInt(party.charAt(i + 1) + party.charAt(i), 16);
            builder.u8(byte);
        }
        return builder.out();
    },
};
