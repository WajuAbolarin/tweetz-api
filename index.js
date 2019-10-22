const { createServer } = require("http");
const context = require("./src/app/context");
const PORT = process.env.PORT || 9000; //move to config
const bootstrap = require("./bootstrap");

bootstrap(context).then(async connectedApp => {
  let server = createServer(connectedApp);

  server.listen(PORT, () => {
    console.log(`App Listening on http://localhost:${PORT}`);
  });
});
