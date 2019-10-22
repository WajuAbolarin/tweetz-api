module.exports = ({ app }) => {
  app.get("/tweetz/:id/comments", (req, res) => {
    res.send(`found some comments`);
  });
};
