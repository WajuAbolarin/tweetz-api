module.exports = ({ app, TweetzService }) => {
  app.get(`/tweetz`, async (_, res) => {
    let tweetz = await TweetzService.getTweetz();
    res.status(200).json(tweetz);
  });

  app.post(`/tweetz`, async (req, res) => {
    let tweet = await TweetzService.create({ ...req.body });
    res.status(201).json(tweet);
  });

  app.get(`/tweetz/:id`, async (req, res) => {
    try {
      let tweetz = await TweetzService.getTweetByID(req.params.id);
      if (!tweetz) {
        throw new Error("Not found");
      }
      res.status(200).json(tweetz);
    } catch (e) {
      return res.status(404).send(e);
    }
  });
  app.delete(`/tweetz/:id`, async (req, res) => {
    try {
      await TweetzService.remove(req.params);
      res.status(200).json(`Tweet Deleted`);
    } catch (e) {
      res.status(404);
    }
  });
};
