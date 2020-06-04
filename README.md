# diepbuddy-client

[![NPM version](https://badge.fury.io/js/diepbuddy-client.svg)](https://www.npmjs.com/package/diepbuddy-client)
[![license](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

## Description

Connect to a diep.io server very easily.

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

If you want to learn the server protocol I suggest visiting these sites:
https://github.com/cx88/diepssect
https://github.com/HueHanaejistla/diep.io-protocol-wiki