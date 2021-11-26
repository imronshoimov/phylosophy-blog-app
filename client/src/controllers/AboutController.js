const path = require("path/posix");

class About {
  get(req, res) {
    try {
      res.sendFile(path.join(process.cwd(), "src", "views", "about.html"));
    } catch (error) {
      res.send(error.message);
    }
  }
}

module.exports = About;