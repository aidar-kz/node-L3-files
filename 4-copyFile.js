const { copyFile } = require("fs");

copyFile("test.txt", "копия.txt", (err) => {
  if (err) throw err;

  console.log("Скопировано");
});
