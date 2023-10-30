const app = require("./app");
const config = require("./config/config");

// const port = process.env.PORT || 3000;
const port = config.app.port || 4000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
