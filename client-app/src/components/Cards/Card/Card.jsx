const Card = ({ ticker, interval, alerts }) => {
  return (
    <section>
      <span> Ticker: {ticker} </span>
      <span> Interval: {interval} </span>
      {alerts ? (
        alerts.map(({ alert_id, ema13, ema63 }) => (
          <div key={alert_id}>
            <span> {ema13} </span>
            <span> {ema63} </span>
          </div>
        ))
      ) : (
        <span> No alerts yet </span>
      )}
    </section>
  );
};

export default Card;