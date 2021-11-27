const path = require("path");

class Style {
  get(req, res) {
    try {
      res.sendFile(path.join(process.cwd(), "src", "views", "index.html"));
    } catch (error) {
      res.send(error.message);
    }
  }
}

module.exports = Style;