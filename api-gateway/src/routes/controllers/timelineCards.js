const generateUUID = require("@root/helpers/generateUUID");
const pool = require("@root/db/connection");
const axios = require("axios");
const accessEnv = require("@root/helpers/accessEnv");

const APP_URI = accessEnv("APP_URI", process.env.APP_URI);

const getTimelineCards = async (req, res, next) => {
  const result = await pool.query(`
    SELECT timeline_card_id, timeline_id, ema13, ema63
    FROM timeline_cards
  `);

  return res.json(result.rows);
};

const postTimelineCard = async (req, res, next) => {
  try {
    const timeline = await axios.get(`${APP_URI}/api/timeline`);
    const result = await axios.post(`${APP_URI}/api/pollEma`, {
      ticker: 'SPX',
      interval: '5min',
      timePeriod: ''
    });

    const card = {
      timeline_card_id: generateUUID(),
      timeline_id: timeline.data.timeline_id,
      ema13: result.data.ema13.values[0].ema,
      ema63: result.data.ema63.values[0].ema
    };

    console.log(card);
    const timelineCard = await pool.query(`
      INSERT INTO timeline_cards(timeline_card_id, timeline_id, ema13, ema63)
      VALUES($1, $2, $3, $4) RETURNING *
    `, [card.timeline_card_id, card.timeline_id, card.ema13, card.ema63]);

    return res.json(timelineCard.rows[0]);
  }
  catch(err) {
    console.error(`Error when sending POST to /timeline/card, ${err}`);
  }
};

module.exports = { getTimelineCards, postTimelineCard };