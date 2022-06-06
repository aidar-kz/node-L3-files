const fs = require("fs");

fs.writeFile("test.txt", "Ура, я в файле!", (err) => {
  if (err) throw err;

  console.log("Записано.");
});
