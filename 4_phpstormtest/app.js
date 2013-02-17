var server = require("./server");

server.app.get('/', server.routes.index);
server.app.get('/about', server.routes.about);

server.start();