const fs = require("fs");

const file = fs.createWriteStream("./bigfiles/bigfile.txt");

for (let i = 0; i < 1000000; i++) {
  file.write(
    "Magna dolore enim adipisicing aliqua non nisi ut cupidatat est tempor excepteur proident exercitation excepteur. Nostrud quis minim aliqua id eu irure do et labore. Nostrud consectetur anim est duis ex est mollit duis fugiat culpa fugiat dolore proident. Esse incididunt exercitation enim veniam ipsum quis dolore do dolore proident sunt minim quis tempor. Et consequat veniam sunt mollit fugiat ullamco cupidatat commodo incididunt. Amet culpa reprehenderit commodo Lorem qui. Sunt ad cupidatat cupidatat do do id dolor ex."
  );
}

file.end();
