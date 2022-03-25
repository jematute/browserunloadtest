"use strict";
exports.__esModule = true;
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var httpServer = (0, http_1.createServer)();
var io = new socket_io_1.Server(httpServer, {
// ...
});
io.on("connection", function (socket) {
    socket.on('disconnect', function (data) {
        console.log('disconnect!');
    });
    console.log("Client Connected");
});
httpServer.listen(3000);
