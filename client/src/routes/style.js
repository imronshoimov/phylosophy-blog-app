const { Router } = require("express");
const StyleController = require("../controllers/StyleController");
const router = Router({ mergeParams: true });
const ctrl = new StyleController();

router.route("/styles").get(ctrl.get);

module.exports = router;