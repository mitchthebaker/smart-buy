const postPoll = async (req, res, next) => {
  if(!req.body.ticker) return next(new Error("Invalid body, missing ticker parameter in req.body"));
  if(!req.body.interval) return next(new Error("Invalid body, missing interval parameter in req.body"));

  try {
    console.log(req.body);
    return res.json(req.body);
  }
  catch(err) {
    console.error(`Error when sending POST to /poll, ${err}`);
  }
};

module.exports = { postPoll };