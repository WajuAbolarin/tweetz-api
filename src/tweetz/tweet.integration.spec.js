const { clearTweets, makeTweet } = require("../../test/utils");
const { createServer } = require("http");
const context = require("../app/context");
const request = require("supertest");
const PORT = 3003; //move to config
const bootstrap = require("../../bootstrap");
async function startServer() {
  let connectedApp = await bootstrap(context);
  let server = createServer(connectedApp);
  server.listen(PORT, () => {
    console.log(`App Listening in test http://localhost:${PORT}`);
  });
  return Promise.resolve(server);
}
describe("Tweetz", () => {
  let server;
  afterEach(() => {
    server.close();
  });

  test("Can create a tweet", async () => {
    await clearTweets();
    server = await startServer();
    let agent = request.agent(server);
    let newTweet = makeTweet();
    let message = await agent.post("/tweetz").send(newTweet);
    expect(message.body.body).toEqual(newTweet.body);
  });
});
