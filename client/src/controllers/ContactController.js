const path = require("path");

class Contact {
  get(req, res) {
    try {
      res.sendFile(path.join(process.cwd(), "src", "views", "contact.html"));
    } catch (error) {
      res.send(error.message);
    }
  }
}

module.exports = Contact;
