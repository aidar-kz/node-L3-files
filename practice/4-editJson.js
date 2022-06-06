const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "/files/my-json.json");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;

  const obj = JSON.parse(data);

  obj.name = "Aidar";
  obj.date = new Date().toLocaleDateString();

  fs.writeFile(filePath, JSON.stringify(obj), (err) => {
    if (err) throw err;

    console.log("Файл записан");
  });
});
