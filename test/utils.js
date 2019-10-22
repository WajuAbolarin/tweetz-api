const Tweet = require("../src/tweetz/tweetz.model");
const casual = require("casual");
async function clearTweets() {
  console.log(Tweet);
  return Tweet.truncate({ restartIdentity: true, logging: false });
}
function makeTweet() {
  casual.seed(123);
  return {
    body: casual.sentences(casual.random_element([1, 2, 3, 4]))
  };
}

module.exports = { clearTweets, makeTweet };
