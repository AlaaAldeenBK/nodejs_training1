const event = require("events");
const server = require("http")
const starting = server.createServer((req,res) =>{
    eEmit.emit("onLunch", req);
    res.write("Inside Server");
    res.end();
});
const eEmit = new event();

eEmit.on("onLunch",(request) =>{
    // console.log("Event With no parameter");
    console.log(request.url);
});

// eEmit.on("onLunch",(x,y) =>{
//     console.log("Event with two parameter");
//     console.log(`${x} , ${y}`);
// });

// eEmit.on("onLunch", (request,...par)=>{
//     console.log("Event with many parameter");
//     console.log(`${par}`);
// });



starting.listen("3000")