export const mockTimeline = {
  timeline_id: 1,
  ticker: 'SPX',
  interval: '5min',
  created_at: '2022-12-13 09:30:00.810302+00',
  date: '2022-12-13',
  start_time: '9:30AM',
  start_price: 3730,
  end_price: 3670,
  bsp: 60,
  cards: [
    {
      card_id: 1,
      created_at: '2022-12-13 09:30:00.810302+00',
      alerts: [
        {
          alert_id: 1,
          current_price: 3740,
          current_time: '9:30AM',
          ema13: 3735,
          ema63: 3725,
          ema_difference: 10,
          rate_of_change: 1.5,
          cross_eta: '9:35AM',
          cross_time: null,
          trend: 'Bullish',
        },
        {
          alert_id: 2,
          current_price: 3728,
          current_time: '9:35AM',
          ema13: 3731,
          ema63: 3725,
          ema_difference: 6,
          rate_of_change: 1,
          cross_eta: '9:45AM',
          cross_time: null,
          trend: 'Bullish',
        },
        {
          alert_id: 3,
          current_price: 3725,
          current_time: '9:40AM',
          ema13: 3727,
          ema63: 3724,
          ema_difference: 3,
          rate_of_change: 0.5,
          cross_eta: '9:45AM',
          cross_time: null,
          trend: 'Bullish',
        },
        {
          alert_id: 4,
          current_price: 3740,
          current_time: '9:45AM',
          ema13: 3735,
          ema63: 3725,
          ema_difference: 10,
          rate_of_change: 1.5,
          cross_eta: '9:35AM',
          cross_time: '9:45AM',
          trend: 'Bullish',
        },
      ],
    },
    {
      card_id: 2,
      created_at: '2022-12-13 09:30:00.810302+00',
      alerts: [
        {
          alert_id: 4,
          current_price: 3730,
          current_time: '9:30AM',
          ema13: 3735,
          ema63: 3725,
          ema_difference: 10,
          rate_of_change: 1.5,
          cross_eta: '9:35AM',
          cross_time: null,
          trend: 'Bullish',
        },
        {
          alert_id: 5,
          current_price: 3728,
          current_time: '9:35AM',
          ema13: 3731,
          ema63: 3725,
          ema_difference: 6,
          rate_of_change: 1,
          cross_eta: '9:45AM',
          cross_time: null,
          trend: 'Bullish',
        },
        {
          alert_id: 6,
          current_price: 3725,
          current_time: '9:40AM',
          ema13: 3727,
          ema63: 3724,
          ema_difference: 3,
          rate_of_change: 0.5,
          cross_eta: '9:45AM',
          cross_time: null,
          trend: 'Bullish',
        },
      ],
    },
  ],
};