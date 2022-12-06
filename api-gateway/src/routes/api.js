const express = require("express");
const router = express.Router();

const { getTest } = require("@root/routes/controllers/test");
const { getMessages, postMessage } = require("@root/routes/controllers/messages");
const { postPollEma } = require("@root/routes/controllers/poll");
const { startIntervalScheduler, stopIntervalScheduler } = require("@root/routes/controllers/scheduler");

// test routes
router.get("/test", getTest);

// messages routes
router.get("/messages", getMessages);
router.post("/messages", postMessage);

// poll routes 
router.post("/pollEma", postPollEma);

// scheduler routes
router.get("/scheduler/startInterval", startIntervalScheduler);
router.get("/scheduler/stopInterval", stopIntervalScheduler);

module.exports = router;