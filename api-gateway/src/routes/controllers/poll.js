const axios = require("axios");

const { getEma } = require("@root/routes/axios/getEma");

const postPollEma = async (req, res, next) => { 
  if(!req.body.ticker) return next(new Error("Invalid body, missing ticker parameter in req.body"));
  if(!req.body.interval) return next(new Error("Invalid body, missing interval parameter in req.body"));
  //if(!req.body.timePeriod) return next(new Error("Invalid body, missing timePeriod parameter in req.body"));

  try {
    const { ticker, interval, timePeriod } = req.body;
    let result = await axios.all([
      getEma(ticker, interval, 13), 
      getEma(ticker, interval, 63)
    ]);
    return res.status(200).json({
      ema13: result[0].data.values[0].ema,
      ema63: result[1].data.values[0].ema
    });
  }
  catch(err) {
    console.error(`Error when sending POST to /pollEma, ${err}`);
    return res.status(500).json({ message: err });
  }
};

module.exports = { postPollEma };