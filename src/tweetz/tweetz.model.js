const db = require("../db/index");
const Sequelize = require("sequelize");
class Tweet extends Sequelize.Model {}
Tweet.init(
  {
    body: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "tweet"
  }
);

module.exports = Tweet;
