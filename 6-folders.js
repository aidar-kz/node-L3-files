const fs = require("fs");
const path = require("path");

// fs.mkdir("some/folder/новая-папка", { recursive: true }, (err) => {
//   if (err) throw err;

//   console.log("Папка создана");
// });

const folderPath = "./";

// fs.readdir(folderPath, (err, data) => {
//   if (err) throw err;

//   data.map((fileName) => {
//     if (isFile(fileName)) {
//       console.log(path.join(folderPath, fileName));
//     }
//   });
// });

// const isFile = (fileName) => fs.lstatSync(fileName).isFile();

// fs.rename("новая-папка", "другая-папка", (err) => {
//   if (err) throw err;

//   console.log("Переименовано");
// });

fs.rm("some", { recursive: true }, (err) => {
  if (err) throw err;

  console.log("Папка удалена");
});
