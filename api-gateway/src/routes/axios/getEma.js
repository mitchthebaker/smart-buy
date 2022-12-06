const axios = require("axios");
const accessEnv = require("@root/helpers/accessEnv");

const TD_URI = accessEnv("TD_URI", process.env.TD_URI);
const TD_API_KEY = accessEnv("TD_API_KEY", process.env.TD_API_KEY);
const TD_API_OUTPUTSIZE = parseInt(accessEnv("TD_API_OUTPUTSIZE", process.env.TD_API_OUTPUTSIZE), 10);

const getEma = (ticker, interval, timePeriod) => {
  return axios.get(`${TD_URI}/ema?symbol=${ticker}&interval=${interval}&time_period=${timePeriod}&outputsize=${TD_API_OUTPUTSIZE}&apikey=${TD_API_KEY}`);
};

module.exports = { getEma };