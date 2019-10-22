const globby = require("globby");
const bootstrap = async context => {
  const routers = await globby(["./src/**/*.router.js"]);
  routers.forEach(router => {
    require(router)(context);
  });

  context.app.all("*", (_, res) => {
    res.status(404);
  });
  await context.boostrapDataBase();
  return Promise.resolve(context.app);
};

module.exports = bootstrap;
