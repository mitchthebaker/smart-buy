const express = require("express");
const router = express.Router();

const { getTest } = require("@root/routes/controllers/test");
const { getMessages, postMessage } = require("@root/routes/controllers/messages");
const { postPollEma } = require("@root/routes/controllers/poll");
const { startIntervalScheduler, stopIntervalScheduler } = require("@root/routes/controllers/scheduler");
const { getTimeline, getTimelineById, postTimeline } = require("@root/routes/controllers/timelines");
const { getCards, getCardsByTimelineId, postCards } = require("@root/routes/controllers/cards");

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


/**
 * should be doing something like /timeline/:id/cards 
 * to get all cards, then doing call for timeline isn't 
 * necessary. in postTimelineCard
 */

// timeline routes 
router.get("/timeline", getTimeline);
router.get("/timeline/:id", getTimelineById);
router.post("/timeline", postTimeline);

// timeline card routes 
router.get("/cards", getCards);
router.get("/timeline/:id/cards", getCardsByTimelineId);
router.post("/cards", postCards);

module.exports = router;