```js
/**
 * Class: This is DiepSocket, it is used to connect to a diep.io server.
 *
 * new DiepSocket(link[,options])
 *  - link {String] The party link from the server
 *  - options {Object}
 * 	    - timeout: How long the connection is allowed to take to establish before the connection times out. Default 30 seconds
 *      - proxy {String} The http proxy that will be used
 *      - ipv6 {String} The ipv6 that will be used
 *      - forceTeam {boolean} When set to true will only join same team otherwise throw an error
 *
 * Event: 'open'
 * Emitted when the connection is established.
 *
 * Event: 'accept'
 * Emitted when the server accepts us as a client.
 * I suggest to use this event instead of 'open'.
 *
 * Event: 'message'
 *  - data {Buffer} The Buffer sent from the server
 * Emitted when a message is received from the server.
 *
 * Event: 'broadcast'
 *  - message {String} The broadcast message.
 * Emitted when diep.io sends a broadcast packet. e.g. 'You have killed ...'
 * Event: 'close'
 *  - code {Number}
 *  - reason {String}
 * Emitted when the connection is closed. code is a numeric value indicating
 * the status code explaining why the connection has been closed. reason is a
 * human-readable string explaining why the connection has been closed.
 * You can use custom codes starting at 4000.
 *
 * Event: 'error'
 *  - error {Error}
 * Emitted when an error occurs.
 *
 * Event: 'timeout'
 *  - reason {Error}
 * Emitted when the connection takes too long to establish.
 * When there's no 'timeout' listener, 'error' will be emitted instead.
 *
 * socket.send(...args)
 * Send data to the server.
 *
 * socket.sendBinary(data)
 * Send binary data to the server.
 *
 * socket.spawn(name)
 *  - name {String} The name
 * Spawn with the given name.
 *
 * socket.move(flags, mouseX, mouseY, movX, movY)
 *  - flags {Integer} The flags
 *  - mouseX {Float} The mouse X position
 *  - mouseY {Float} The mouse Y position
 *  - movX {Float} The movement X
 *  - movY {Float} The movement Y
 * Send a movement packet.
 *
 * socket.close()
 * Close the connection.
 *
 * DiepSocket.getLink(ws[, party])
 *  - ws {String} This can be the wsURL or the server id.
 *  - party {String} The party code.
 *
 * DiepSocket.parseLink(link)
 *  - link {String} The server link.
 *  - {id, party}
 * Returns the id from the server and the party code.
 *
 * DiepSocket.findServer(gamemode, region, cb)
 *  - gamemode {String} The gamemode
 *  - region {String} The region
 *  - cb {Function} The callback function
 * Calls the callback function with the found party link.
 *
 * DiepSocket.findServerSync(gamemode, region)
 *  - gamemode {String} The gamemode
 *  - region {String} The region
 * Returns null if it couldn't find a link otherwise the link to the given options.
 */
```