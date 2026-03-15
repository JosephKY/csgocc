const router = require('express').Router();

router.get('/authenticate', require("../controllers/steam/authenticate.controller"));
router.get('/verify', require("../controllers/steam/verify.controller"));
router.get('/logout', require("../controllers/steam/logout.controller"));

module.exports = router