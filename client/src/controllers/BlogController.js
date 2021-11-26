const path = require("path");

class Blog {
  getVideos(req, res) {
    try {
      res.sendFile(path.join(process.cwd(), "src", "views", "single-video.html"));
    } catch (error) {
      res.send(error.messsage);
    }
  }

  getAudios(req, res) {
    try {
      res.sendFile(path.join(process.cwd(), "src", "views", "single-audio.html"));
    } catch (error) {
      res.send(error.messsage);
    }
  }

  getGalleries(req, res) {
    try {
      res.sendFile(path.join(process.cwd(), "src", "views", "single-gallery.html"));
    } catch (error) {
      res.send(error.messsage);
    }
  }

  getStandards(req, res) {
    try {
      res.sendFile(path.join(process.cwd(), "src", "views", "single-standard.html"));
    } catch (error) {
      res.send(error.messsage);
    }
  }
}

module.exports = Blog;
