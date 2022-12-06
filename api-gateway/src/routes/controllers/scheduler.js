const axios = require("axios");
const { startIntervalJob, stopIntervalJob } = require("@root/cron/intervalScheduler");

const startIntervalScheduler = async (req, res, next) => {
  try {
    startIntervalJob(req.query);
  }
  catch(err) {
    console.error(`Error when sending GET to /startIntervalScheduler, ${err}`);
    return res.status(500).json({ message: err });
  }
};

const stopIntervalScheduler = async (req, res, next) => {
  try {
    stopIntervalJob();
  }
  catch(err) {
    console.error(`Error when sending GET to /stopIntervalScheduler, ${err}`);
    return res.status(500).json({ message: err });
  }
};

module.exports = {
  startIntervalScheduler,
  stopIntervalScheduler
};