const { Router } = require("express");
const BlogController = require("../controllers/BlogController");
const router = Router({ mergeParams: true });
const ctrl = new BlogController();

router.route("/blog/videos").get(ctrl.getVideos);
router.route("/blog/audios").get(ctrl.getAudios);
router.route("/blog/galleries").get(ctrl.getGalleries);
router.route("/blog/standards").get(ctrl.getStandards);

module.exports = router;