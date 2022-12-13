const generateUUID = require("@root/helpers/generateUUID");
const pool = require("@root/db/connection");
const axios = require("axios");
const accessEnv = require("@root/helpers/accessEnv");

const APP_URI = accessEnv("APP_URI", process.env.APP_URI);

// get today's timeline 
    /*const timeline = await pool.query(`
      SELECT timeline_id, created_at, ticker, timeframe 
      FROM timelines
      WHERE created_at > now() - interval '24 hours'
    `);*/

const getTimeline = async (req, res, next) => {
  try {
    const timelines = await pool.query(`
      SELECT timeline_id, created_at, ticker, timeframe
      FROM timelines
    `);

    const payload = [];

    for(let i = 0; i < timelines.rows.length; i++) {
      const cards = await axios.get(`${APP_URI}/api/timeline/${timelines.rows[i].timeline_id}/cards`);
      payload.push({
        timeline_id: timelines.rows[i].timeline_id,
        created_at: timelines.rows[i].created_at,
        ticker: timelines.rows[i].ticker,
        timeframe: timelines.rows[i].timeframe,
        cards: cards.data
      });
    }
    
    return res.json(payload);
  }
  catch(err) {
    console.error(`Error when sending GET to /timeline, ${err}`);
  }
};

const getTimelineById = async (req, res, next) => {
  try {
    if(!req.params.id) return next(new Error(`Invalid url params, missing req.params.id`));

    const timeline = await pool.query(`
      SELECT timeline_id, created_at, ticker, timeframe 
      FROM timelines
      WHERE timeline_id = $1
    `, [req.params.id]);

    const cards = await axios.get(`${APP_URI}/api/timeline/${timeline.rows[0].timeline_id}/cards`);
    const payload = {
      timeline_id: timeline.rows[0].timeline_id,
      created_at: timeline.rows[0].created_at,
      ticker: timeline.rows[0].ticker,
      timeframe: timeline.rows[0].timeframe,
      cards: cards.data
    };

    return res.json(payload);
  }
  catch(err) {
    console.error(`Error when sending GET to /timeline/:id, ${err}`);
  }
};

const postTimeline = async (req, res, next) => {
  try {
    const { ticker, timeframe } = req.body;
    const new_timeline = {
      id: generateUUID(),
      ticker: ticker,
      timeframe: timeframe
    };

    const result = await pool.query(`
      INSERT INTO timelines(timeline_id, ticker, timeframe) VALUES($1, $2, $3) RETURNING *
    `, [new_timeline.id, new_timeline.ticker, new_timeline.timeframe]);

    return res.json(result.rows[0]);
  }
  catch(err) {
    console.error(`Error when sending POST to /timeline, ${err}`);
  }
};

module.exports = { getTimeline, getTimelineById, postTimeline };