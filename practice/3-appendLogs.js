const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "/files/my-logs.txt");
const date = new Date();
const data = `Запуск: ${date.toLocaleString()}\n`;

fs.writeFile(filePath, data, { flag: "a" }, (err) => {
  if (err) throw err;

  console.log("Дата добавлена");
});
