const { Router } = require("express");
const AboutController = require("../controllers/AboutController");
const router = Router({ mergeParams: true });
const ctrl = new AboutController();

router.route("/about").get(ctrl.get);

module.exports = router;