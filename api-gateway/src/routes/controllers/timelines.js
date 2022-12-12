const generateUUID = require("@root/helpers/generateUUID");
const pool = require("@root/db/connection");

// get today's timeline 
const getTimeline = async (req, res, next) => {
  try {
    const result = await pool.query(`
      SELECT timeline_id, created_at 
      FROM timelines
      WHERE created_at > now() - interval '24 hours'
    `);

    return res.json(result.rows[0]);
  }
  catch(err) {
    console.error(`Error when sending GET to /messages, ${err}`);
  }
};

const postTimeline = async (req, res, next) => {
  try {
    const newTimeline = {
      timeline_id: generateUUID(),
    };

    console.log(newTimeline);

    const result = await pool.query(`
      INSERT INTO timelines(timeline_id) VALUES($1) RETURNING *
    `, [newTimeline.timeline_id]);

    return res.json(result.rows[0]);
  }
  catch(err) {
    console.error(`Error when sending POST to /timeline, ${err}`);
  }
};

module.exports = { getTimeline, postTimeline };