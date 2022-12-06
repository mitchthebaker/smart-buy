const cron = require("node-cron");

let timelineJob;

const startTimelineJob = () => {
  timelineJob = cron.schedule("30 14 * * 1-5", () => { 

  });
};

const stopTimelineJob = () => {
  if(timelineJob === undefined) return false;
  timelineJob.stop();
};

module.exports = {
  startTimelineJob,
  stopTimelineJob
}; 