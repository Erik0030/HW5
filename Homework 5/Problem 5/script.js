const fs = require("fs");
let x = [
  ["Jack", 24],
  ["Sara", 23],
  ["Peter", 24],
];
let data = x.toString();

fs.writeFile("Output.txt", data, (err) => {
  if (err) throw err;
});
fs.readFile(__dirname + "/Output.txt", (error, data) => {
  if (error) {
    throw error;
  }
  console.log(data.toString());
});
