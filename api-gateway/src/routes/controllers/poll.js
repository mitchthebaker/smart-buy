const axios = require("axios");
const accessEnv = require("@root/helpers/accessEnv");

const TD_URI = accessEnv("TD_URI", "https://api.twelvedata.com");
const TD_API_KEY = accessEnv("TD_API_KEY", null);

const postPoll = async (req, res, next) => {
  if(!req.body.ticker) return next(new Error("Invalid body, missing ticker parameter in req.body"));
  if(!req.body.interval) return next(new Error("Invalid body, missing interval parameter in req.body"));

  try {
    console.log(TD_URI, TD_API_KEY);
    console.log(req.body);
    let result = await axios.get(`${TD_URI}/ema?symbol=${req.body.ticker}&interval=${req.body.interval}&apikey=${TD_API_KEY}`);
    console.log(result.data);
    return res.json(result.data);
  }
  catch(err) {
    console.error(`Error when sending POST to /poll, ${err}`);
  }
};

module.exports = { postPoll };