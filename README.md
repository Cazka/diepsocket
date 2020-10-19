# diepsocket

[![NPM version](https://badge.fury.io/js/diepsocket.svg)](https://www.npmjs.com/package/diepbuddy-client)
[![license](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

## Description

Connect to a diep.io server very easily. Outdated readme, since i made the repo private.

## Installation

```bash
npm install diepsocket
```

## How to use

The following example will connect a bot to the diep.io partylink.

```js
const DiepSocket = require('diepsocket');

const bot = new DiepSocket('diep.io/#26331613006B57F647');

bot.on('accept', () => console.log('Succesfully connected!'))
bot.on('error', (err) => console.log(err));
```
### This is not working anymore
both files needs to be fixed. 
https://github.com/Cazka/diepsocket/blob/master/src/protocol/lib/data/clientbound/update.js 
https://github.com/Cazka/diepsocket/blob/master/src/protocol/lib/crypto.js 

If you want to learn the server protocol I suggest visiting these sites:

https://github.com/cx88/diepssect  
https://github.com/HueHanaejistla/diep.io-protocol-wiki
