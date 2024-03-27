const app = require("./src/app");
const port = 3055;

const sever = app.listen(port, () => {
  console.log(`WSV eCommerce start with port with ${port}`);
});

process.on("SIGINT", () => {
  sever.close(() => {
    console.log(`Exit sever Express`);
  });
});
