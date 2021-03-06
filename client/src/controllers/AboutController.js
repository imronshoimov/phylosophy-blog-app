const path = require("path");

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