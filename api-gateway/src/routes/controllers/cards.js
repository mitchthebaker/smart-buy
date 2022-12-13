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

    const payload = [];

    for(let i = 0; i < cards.rows.length; i++) {
      const alerts = await axios.get(`${APP_URI}/api/timeline/cards/${cards.rows[i].card_id}/alerts`);
      payload.push({
        card_id: cards.rows[i].card_id,
        timeline_id: cards.rows[i].timeline_id,
        created_at: cards.rows[i].created_at,
        alerts: alerts.data
      });
    }
    
    return res.json(payload);
  }
  catch(err) {
    console.error(`Error when sending GET to /cards, ${err}`);
  }
};

const getCardById = async (req, res, next) => {
  try {
    if(!req.params.id) return next(new Error(`Invalid url params, missing req.params.id`));

    const card = await pool.query(`
      SELECT card_id, timeline_id, created_at
      FROM cards
      WHERE card_id = $1
    `, [req.params.id]);

    const alerts = await axios.get(`${APP_URI}/api/timeline/cards/${card.rows[0].card_id}/alerts`);
    const payload = {
      card_id: card.rows[0].card_id,
      timeline_id: card.rows[0].timeline_id,
      created_at: card.rows[0].created_at,
      alerts: alerts.data
    };

    return res.json(payload);
  }
  catch(err) {
    console.error(`Error when sending GET to /cards/:id`);
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

    const payload = [];

    for(let i = 0; i < cards.rows.length; i++) {
      const alerts = await axios.get(`${APP_URI}/api/timeline/cards/${cards.rows[i].card_id}/alerts`);
      payload.push({
        card_id: cards.rows[i].card_id,
        timeline_id: cards.rows[i].timeline_id,
        created_at: cards.rows[i].created_at,
        alerts: alerts.data
      });
    }
    
    return res.json(payload);
  }
  catch(err) {
    console.error(`Error when sending GET to /timeline/:id/cards, ${err}`);
  }
};

const postCard = async (req, res, next) => {
  try {
    if(!req.body.timeline_id) return next(new Error(`Invalid req.body, missing timeline_id`));

    const { timeline_id } = req.body;

    const new_card = {
      id: generateUUID(),
      timeline_id: timeline_id,
    };

    const card = await pool.query(`
      INSERT INTO cards(card_id, timeline_id)
      VALUES($1, $2) RETURNING *
    `, [new_card.id, new_card.timeline_id]);

    return res.json(card.rows[0]);
  }
  catch(err) {
    console.error(`Error when sending POST to /cards, ${err}`);
  }
};

module.exports = { getCards, getCardById, getCardsByTimelineId, postCard };