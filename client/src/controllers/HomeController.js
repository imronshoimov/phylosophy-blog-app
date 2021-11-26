const path = require("path/posix");

class Home {
  get(req, res) {
    try {
      res.sendFile(path.join(process.cwd(), "src", "views", "index.html"));
    } catch (error) {
      res.send(error.message);
    }
  }
}

module.exports = Home;