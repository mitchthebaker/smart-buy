const generateUUID = require("@root/helpers/generateUUID");
const pool = require("@root/db/connection");
const axios = require("axios");
const accessEnv = require("@root/helpers/accessEnv");

const APP_URI = accessEnv("APP_URI", process.env.APP_URI);

const getCards = async (req, res, next) => {
  try {
    const cards = await pool.query(`
      SELECT card_id, timeline_id, created_at
      FROM cards
    `);

    return res.json(cards.rows);
  }
  catch(err) {
    console.error(`Error when sending GET to /cards, ${err}`);
  }
};

const getCardsByTimelineId = async (req, res, next) => {
  try {
    if(!req.params.id) return next(new Error(`Invalid url params, missing req.params.id`));

    const cards = await pool.query(`
        SELECT card_id, timeline_id, created_at
        FROM cards
        WHERE timeline_id = $1
      `, [req.params.id]);

    return res.json(cards.rows);
  }
  catch(err) {
    console.error(`Error when sending GET to /timeline/:id/cards, ${err}`);
  }
};

const postCards = async (req, res, next) => {
  try {
    const timeline = await axios.get(`${APP_URI}/api/timeline`);
    /*const result = await axios.post(`${APP_URI}/api/pollEma`, {
      ticker: 'SPX',
      interval: '5min',
    });*/

    const new_card = {
      id: generateUUID(),
      timeline_id: timeline.data.timeline_id,
    };

    console.log(new_card);
    const result = await pool.query(`
      INSERT INTO cards(card_id, timeline_id)
      VALUES($1, $2) RETURNING *
    `, [new_card.id, new_card.timeline_id]);

    return res.json(result.rows[0]);
  }
  catch(err) {
    console.error(`Error when sending POST to /timeline/card, ${err}`);
  }
};

module.exports = { getCards, getCardsByTimelineId, postCards };