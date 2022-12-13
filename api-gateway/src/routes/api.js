const express = require("express");
const router = express.Router();

const { getTest } = require("@root/routes/controllers/test");
const { getMessages, postMessage } = require("@root/routes/controllers/messages");
const { postPollEma } = require("@root/routes/controllers/poll");
const { startIntervalScheduler, stopIntervalScheduler } = require("@root/routes/controllers/scheduler");
const { getTimeline, postTimeline } = require("@root/routes/controllers/timelines");
const { getTimelineCards, getTimelineCardsById, postTimelineCard } = require("@root/routes/controllers/timelineCards");

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
router.post("/timeline", postTimeline);

// timeline card routes 
router.get("/timeline/card", getTimelineCards);
router.get("/timeline/:id/card", getTimelineCardsById);
router.post("/timeline/card", postTimelineCard);

module.exports = router;