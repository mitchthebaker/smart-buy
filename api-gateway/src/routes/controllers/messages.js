const pool = require("@root/db/connection");
const generateUUID = require("@root/helpers/generateUUID");

// socket handlers
const { postMessageHandler } = require("@root/ws/socket");

const getMessages = async (req, res, next) => {
  try {
    const result = await pool.query(`SELECT * FROM messages`);

    return res.json(result.rows);
  }
  catch(err) {
    console.error(`Error when sending GET to /messages, ${err}`);
  }
};

const postMessage = async (req, res, next) => {
  if(!req.body.message) return next(new Error("Invalid body, missing message parameter in req.body"));

  try {
    let io = req.app.get("socketio");
    const newMessage = {
      id: generateUUID(),
      message: req.body.message
    };

    const result = await pool.query(`
      INSERT INTO messages(id, message) VALUES($1, $2) RETURNING *
    `, [newMessage.id, newMessage.message]);

    //io.emit("postMessage", result.rows);
    postMessageHandler(io, {
      type: "postMessage",
      payload: result.rows
    });
    
    return res.json(result.rows[0]);
  }
  catch(err) {
    console.error(`Error when sending POST to /messages, ${err}`);
  }
};

module.exports = { getMessages, postMessage };