# Data.js

## This is the most important file in here.

You want to establish your own protocol? Good, you will need to create files in the clientbound and serverbound subfolders for each packet kind.

## interface:

```js
const data = {
    id,
    type,
    parse(parser){

    },
    build(builder){

    }
}
module.eyports = data;
```

#### important
`parse(parser)` will return an object that contains the content of that packet. should be named parseContent instead..  
`build(builder)` will build the Buffer by accessing the builder._packet.content property. 

