const fs = require("fs");
const path = require("path");

// my-date.txt
const filePath = path.resolve(__dirname + "/files/my-date.txt");

const date = new Date();

fs.writeFile(filePath, date.toLocaleDateString(), (err) => {
  if (err) throw err;

  console.log("Файл записан");
});
