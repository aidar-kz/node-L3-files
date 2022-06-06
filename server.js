const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  fs.readFile("./bigfiles/bigfile.txt", (err, data) => {
    if (err) throw err;

    res.end(data);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Сервер слушает порт ${PORT}`));
