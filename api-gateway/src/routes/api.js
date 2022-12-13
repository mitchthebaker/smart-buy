const express = require("express");
const router = express.Router();

const { getTest } = require("@root/routes/controllers/test");
const { getMessages, postMessage } = require("@root/routes/controllers/messages");
const { postPollEma } = require("@root/routes/controllers/poll");
const { startIntervalScheduler, stopIntervalScheduler } = require("@root/routes/controllers/scheduler");
const { getTimeline, getTimelineById, postTimeline } = require("@root/routes/controllers/timelines");
const { getCards, getCardById, getCardsByTimelineId, postCard } = require("@root/routes/controllers/cards");
const { getAlerts, getAlertsByCardId, postAlert } = require("@root/routes/controllers/alerts");

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

// timeline routes 
router.get("/timeline", getTimeline);
router.get("/timeline/:id", getTimelineById);
router.post("/timeline", postTimeline);

// cards routes 
router.get("/cards", getCards);
router.get("/cards/:id", getCardById);
router.get("/timeline/:id/cards", getCardsByTimelineId);
router.post("/cards", postCard);

// alerts routes 
router.get("/alerts", getAlerts);
router.get("/timeline/cards/:id/alerts", getAlertsByCardId);
router.post("/alerts", postAlert);

module.exports = router;