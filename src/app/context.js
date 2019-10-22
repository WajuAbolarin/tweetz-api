const { app } = require("./http");
const db = require("../db/index");

const TweetzService = require("../tweetz/tweetz.service");
async function boostrapDataBase() {
  await db.sync({ logging: false });
}
module.exports = { app, TweetzService, boostrapDataBase };
