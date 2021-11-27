const { Router } = require("express");
const HomeController = require("../controllers/HomeController");
const router = Router({ mergeParams: true });
const ctrl = new HomeController();

router.route("/").get(ctrl.get);

module.exports = router;