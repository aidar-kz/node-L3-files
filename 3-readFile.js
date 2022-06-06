const fs = require("fs");

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) console.error("Ошибка при чтении файла:", err.message);

  console.log(data);
});
