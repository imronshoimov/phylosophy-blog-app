const path = require("path");

class Categories {
  getLifestyle(req, res) {
    try {
      res.sendFile(
        path.join(process.cwd(), "src", "views", "category-lifestyle.html")
      );
    } catch (error) {
        res.send(error.message);
    }
  }

  getHealth(req, res) {
    try {
      res.sendFile(
        path.join(process.cwd(), "src", "views", "category-health.html")
      );
    } catch (error) {
        res.send(error.message);
    }
  }

  getFamily(req, res) {
    try {
      res.sendFile(
        path.join(process.cwd(), "src", "views", "category-family.html")
      );
    } catch (error) {
        res.send(error.message);
    }
  }

  getManagement(req, res) {
    try {
      res.sendFile(
        path.join(process.cwd(), "src", "views", "category-management.html")
      );
    } catch (error) {
        res.send(error.message);
    }
  }

  getTravel(req, res) {
    try {
      res.sendFile(
        path.join(process.cwd(), "src", "views", "category-travel.html")
      );
    } catch (error) {
        res.send(error.message);
    }
  }

  getWork(req, res) {
    try {
      res.sendFile(
        path.join(process.cwd(), "src", "views", "category-work.html")
      );
    } catch (error) {
        res.send(error.message);
    }
  }
}

module.exports = Categories;
