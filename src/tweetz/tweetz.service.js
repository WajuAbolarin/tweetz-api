const Tweet = require("./tweetz.model");
const create = async ({ body }) => {
  return Tweet.create({ body });
};

const remove = async ({ id }) => {
  return Tweet.destroy({ where: { id } });
};

const getTweetz = async () => {
  const allTweetz = await Tweet.findAll();
  return allTweetz.reverse();
};

const getTweetByID = id => {
  return Tweet.findByPk(id);
};

module.exports = { create, remove, getTweetByID, getTweetz };
