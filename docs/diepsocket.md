# diepsocket

## Table of Contents

-   [Class: DiepSocket](#class-diepsocket)
    -   [new DiepSocket(link[, options])](#new-diepsocketlink-options)
    -   The following events are from the internal websocket connection
    -   [Event: 'close'](#event-close)
    -   [Event: 'error'](#event-error)
    -   [Event: 'message'](#event-message)
    -   [Event: 'open'](#event-open)
    -   The following events are bot events
    -   [Event: 'accept'](#event-accept)
    -   [Event: 'achievement'](#event-achievement)
    -   [Event: 'dead'](#event-dead)
    -   [Event: 'latency'](#event-latency)
    -   [Event: 'notification'](#event-notification)
    -   [Event: 'player_count'](#event-player_count)
    -   [Event: 'pow_request'](#event-pow_request)
    -   [diepsocket.close([code[, reason]])](#diepsocketclosecode-reason)
    -   [diepsocket.gamemode](#diepsocketgamemode)
    -   [diepsocket.leaderboard](#diepsocketleaderboard)
    -   [diepsocket.link](#diepsocketlink)
    -   [diepsocket.move([flags[,mouseX[,mouseY[,velocityX[,velocityY]]]]])](#diepsocketmoveflags-mouseX-mouseY-velocityX-velocityY)
    -   [diepsocket.moveTo(goalPos[,flags[,mouseX[,mouseY]]])](#diepsocketmoveTogoalPos-flags-mouseX-mouseY)
    -   [diepsocket.position](#diepsocketposition)
    -   [diepsoclet.region](#diepsocketregion)
    -   [diepsocket.send(type, content)](#diepsocketsendtype-content)
    -   [diepsocket.sendBinary(data)](#diepsocketsendBinarydata)
    -   [diepsocket.spawn([name])](#diepsocketspawnname)
-   [Class: DiepSocket.Builder](#class-diepsocketbuilder)
    -   [new DiepSocket.Builder(packet)](#new-diepsocketbuilderpacket)
    -   [builder.clientbound()](#builderclientbound)
    -   [builder.serverbound()](#builderserverbound)
-   [Class: DiepSocket.Parser](#class-diepsocketparser)
    -   [new DiepSocket.Parser(data)](#new-diepsocketparserdata)
    -   [parser.clientbound()](#parserclientbound)
    -   [parser.serverbound()](#parserserverbound)
-   [DiepSocket.getLink(wsURL[,party])](#diepsocketgetLinkwsURL-party)
-   [DiepSocket.linkParse(link)](#diepsocketlinkParselink)
-   [DiepSocket.findServer([gamemode[,region]],cb)](#diepsocketfindServergamemode-region-cb)
-   [DiepSocket.findServerSync([gamemode[,region]])](#diepsocketfindServerSyncgamemode-region-cb)

## Class: DiepSocket

This class represents a DiepSocket. It extends the `EventEmitter`.

### new DiepSocket(link[, options])

-   `link` {String} The link to which to connect.
-   `options` {Object}
    -   `timeout` {Number} Timeout in milliseconds for the handshake request. Default 20,000 ms.
    -   `proxy` {String} The http proxy that will be used.
    -   `ipv6` {String} The ipv6 that will be used.
    -   `forceTeam` {Boolean} When set to true will only join same team otherwise throw an error.
    -   `ws_options` {Object} Options to pass to the WebSocket constructor.

Create a new DiepSocket instance.

### Event: 'close'

-   `code` {Number}
-   `reason` {String}

Emitted when the connection is closed. `code` is a numeric value indicating the
status code explaining why the connection has been closed. `reason` is a
human-readable string explaining why the connection has been closed.

### Event: 'error'

-   `error` {Error}

Emitted when an error occurs.  
Important to note: This event can trigger after the `open` event but never after the `accept` event.

### Event: 'message'

-   `data` {String|Buffer|ArrayBuffer|Buffer[]}

Emitted when a message is received from the server. data is unshuffled.

### Event: 'open'

Emitted when the connection is established.  
Important to note: Only use this event if you know what you are doing. You will not need this 99% of the time. For example you can use this to implement your own Proof of Work Solver. Example in examples folder.

### Event: 'accept'

Emitted when the server accepts us as a client.
Use this event to check for a successful connection.

### Event: 'achievement'

- `achievement` {Object}
- `achievement.ids` {Array}

Emitted when the bot receives an achievement packet.  
Could be used to detect various in game events like destroying shapes.

### Event: 'dead'

Emitted when the bot dies.

### Event: 'latency'

-   `latency` {Number}

Emitted when the server responds to our heartbeat.

### Event: 'notification'

-   `notification` {Object}
-   `notification.message` {String}
-   `notification.color` {Number}
-   `notification.time` {Number}
-   `notification.unique` {String}

Emitted when the server sends a notification packet. For example 'You have killed ...'

### Event: 'player_count'

-   `player_count` {Number}

Emitted when the server sends a player_count packet.

### Event: 'pow_request'

-   `pow_request` {Object}
-   `pow_request.difficulty` {Number}
-   `pow_request.prefix` {String}

Emitted when the server sends a Proof of Work request.  
If a listener is attached to this event, diepsocket will not solve this pow.  
Use this if you want to implement your own Proof of Work solver. See examples folder.

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
