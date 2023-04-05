class NewController {
  // [GET] /news
  index(req, res) {
    res.render("new");
  }

  show(req, res) {
    res.send("new details");
  }
}

module.exports = new NewController();
