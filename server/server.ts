// const options = { cors: {"origin": "*"} };
// const io = require("socket.io")(3000, options);

// io.on("connection", () => { /* ... */ });


import { createServer } from "http";
import { Server, Socket } from "socket.io";
import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: 'http://localhost:4200' } });


io.on("connection", (socket: Socket) => {
  console.log("CONNECTED CLIENT");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  })
});


app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname, '/index.html'));
});

httpServer.listen(3000, () => {
  console.log("listeting on port 3000");
});















// import express from 'express';
// import path from 'path';
// import * as http from 'http';
// import expressWs from 'express-ws';
// const { app, getWss, applyTo } = expressWs(express());
// const port = 4000;

// app.get('/', (req, resp) => {
//     resp.sendFile(path.join(__dirname, '/index.html'));
// });

// app.ws('/', (ws, req) => {
//     ws.on("connection", () => {
//         console.log("connecting");
//     });


// });


// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// });

// app.post("postr")

interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }
  
  interface ClientToServerEvents {
    hello: () => void;
  }
  
  interface InterServerEvents {
    ping: () => void;
  }
  
  interface SocketData {
    name: string;
    age: number;
  }