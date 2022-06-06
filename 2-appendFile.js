const fs = require("fs");

fs.appendFile("test.txt", " Это надо дозаписать", (err) => {
  if (err) throw err;

  console.log("Дозаписано");
});
