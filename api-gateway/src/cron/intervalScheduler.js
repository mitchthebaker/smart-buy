const cron = require("node-cron");
const axios = require("axios");
const pool = require("@root/db/connection");

const accessEnv = require("@root/helpers/accessEnv");
const APP_URI = accessEnv("APP_URI", process.env.APP_URI);

let intervalJob;

const startIntervalJob = (query) => {
  console.log(query);
  // "*/5 * * * 1-5" - every 5min, M-F
  intervalJob = cron.schedule("*/5 * * * * *", async () => {
    try {
      const result = await axios.post(`${APP_URI}/api/pollEma`, query);
      console.log(result.data);
      console.log(result.data.ema13);
      console.log(result.data.ema63);
    }
    catch(err) {
      console.error(err);
    }
  });
};

const stopIntervalJob = () => {
  if(intervalJob === undefined) return false;
  intervalJob.stop();
};

module.exports = {
  startIntervalJob,
  stopIntervalJob
}; 