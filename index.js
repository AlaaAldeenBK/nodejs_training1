const event = require("events");
const server = require("http")
const fs = require("fs").promises;
const starting = server.createServer((req,res) =>{
    // eEmit.emit("onLunch",res);
    res.write("Inside Server");
    readContent(res);

    res.end();
    
    
    
});
const eEmit = new event();












eEmit.on("onLunch",(respons) =>{
    // console.log("Event With no parameter");
    // console.log(request.url);

    
});

// eEmit.on("onLunch",(x,y) =>{
//     console.log("Event with two parameter");
//     console.log(`${x} , ${y}`);
// });

// eEmit.on("onLunch", (request,...par)=>{
//     console.log("Event with many parameter");
//     console.log(`${par}`);
// });



starting.listen("3000");


async function  readContent(respons)
{
    fs.readFile("namess.txt","utf8",(err,data)=>{
        if(err)
        {
            console.log(err.message);
            respons.end("Can not process your request");
        }
        else
        {
            respons.write(data);
            // respons.end();
        }
    });
}