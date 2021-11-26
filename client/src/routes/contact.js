const { Router } = require("express");
const ContactController = require("../controllers/ContactController");
const router = Router({ mergeParams: true });
const ctrl = new ContactController();

router.route("/contact").get(ctrl.get);

module.exports = router;
