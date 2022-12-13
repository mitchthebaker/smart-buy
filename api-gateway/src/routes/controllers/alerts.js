const generateUUID = require("@root/helpers/generateUUID");
const pool = require("@root/db/connection");
const axios = require("axios");
const accessEnv = require("@root/helpers/accessEnv");

const APP_URI = accessEnv("APP_URI", process.env.APP_URI);

const getAlerts = async (req, res, next) => {
  try {
    const alerts = await pool.query(`
      SELECT alert_id, card_id, created_at, ema13, ema63
      FROM alerts
    `);

    return res.json(alerts.rows);
  }
  catch(err) {
    console.error(`Error whend sending GET to /alerts, ${err}`);
  }
};

const getAlertsByCardId = async (req, res, next) => {
  try {
    if(!req.params.id) return next(new Error(`Invalid url params, missing req.params.id`));

    const alerts = await pool.query(`
      SELECT alert_id, card_id, created_at, ema13, ema63
      FROM alerts 
      WHERE card_id = $1
    `, [req.params.id]);

    return res.json(alerts.rows);
  }
  catch(err) {
    console.error(`Error when sending GET to /timeline/cards/:id/alerts`);
  }
};

const postAlert = async (req, res, next) => {
  try {
    if(!req.body.card_id) return next(new Error(`Invalid req.body, missing card_id`));
    
    const { card_id } = req.body;

    const card = await axios.get(`${APP_URI}/api/cards/${card_id}`);
    const timeline = await axios.get(`${APP_URI}/api/timeline/${card.data.timeline_id}`);
    const poll = await axios.post(`${APP_URI}/api/pollEma`, {
      ticker: timeline.data.ticker,
      interval: timeline.data.interval
    });

    const new_alert = {
      id: generateUUID(),
      card_id: card_id,
      ema13: poll.data.ema13,
      ema63: poll.data.ema63
    };

    const alert = await pool.query(`
      INSERT INTO alerts(alert_id, card_id, ema13, ema63) 
      VALUES($1, $2, $3, $4) RETURNING *
    `, [new_alert.id, new_alert.card_id, new_alert.ema13, new_alert.ema63]);

    return res.json(alert.rows[0]);
  }
  catch(err) {
    console.error(`Error when sending POST to /alerts, ${err}`);
  }
};

module.exports = { getAlerts, getAlertsByCardId, postAlert };