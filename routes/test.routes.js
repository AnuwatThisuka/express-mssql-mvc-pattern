const express = require("express");
const router = express.Router();
const TestController = require("../controller/Test.controller");

router.get("/test", TestController.getMultiple);

module.exports = router;
