const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname + "/files/my-text.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;

  const count = data.match(/\d/g);
  console.log("Кол-во цифр:", count.length);
});
