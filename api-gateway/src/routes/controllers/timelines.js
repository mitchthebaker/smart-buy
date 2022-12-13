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
      SELECT timeline_id, created_at, ticker, interval
      FROM timelines
    `);

    const payload = [];

    for(let i = 0; i < timelines.rows.length; i++) {
      const cards = await axios.get(`${APP_URI}/api/timeline/${timelines.rows[i].timeline_id}/cards`);
      payload.push({
        timeline_id: timelines.rows[i].timeline_id,
        created_at: timelines.rows[i].created_at,
        ticker: timelines.rows[i].ticker,
        interval: timelines.rows[i].interval,
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
      SELECT timeline_id, created_at, ticker, interval 
      FROM timelines
      WHERE timeline_id = $1
    `, [req.params.id]);

    const cards = await axios.get(`${APP_URI}/api/timeline/${timeline.rows[0].timeline_id}/cards`);
    const payload = {
      timeline_id: timeline.rows[0].timeline_id,
      created_at: timeline.rows[0].created_at,
      ticker: timeline.rows[0].ticker,
      interval: timeline.rows[0].interval,
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
    if(!req.body.ticker) return next(new Error(`Invalid req.body, missing ticker`));
    if(!req.body.interval) return next(new Error(`Invalid req.body, missing interval`));

    const { ticker, interval } = req.body;
    const new_timeline = {
      id: generateUUID(),
      ticker: ticker,
      interval: interval
    };

    const timeline = await pool.query(`
      INSERT INTO timelines(timeline_id, ticker, interval) VALUES($1, $2, $3) RETURNING *
    `, [new_timeline.id, new_timeline.ticker, new_timeline.interval]);

    return res.json(timeline.rows[0]);
  }
  catch(err) {
    console.error(`Error when sending POST to /timeline, ${err}`);
  }
};

module.exports = { getTimeline, getTimelineById, postTimeline };