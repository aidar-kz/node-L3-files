const { rm } = require("fs");

rm("test2.txt", (err) => {
  if (err) throw err;

  console.log("Удалено");
});
