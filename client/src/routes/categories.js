const { Router } = require("express");
const CategoryController = require("../controllers/CategoryController");
const router = Router({ mergeParams: true });
const ctrl = new CategoryController();

router.route("/category/lifestyle").get(ctrl.getLifestyle);
router.route("/category/health").get(ctrl.getHealth);
router.route("/category/family").get(ctrl.getFamily);
router.route("/category/management").get(ctrl.getManagement);
router.route("/category/travel").get(ctrl.getTravel);
router.route("/category/work").get(ctrl.getWork);

module.exports = router;