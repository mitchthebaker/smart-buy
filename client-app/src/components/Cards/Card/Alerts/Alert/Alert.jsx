import '../../../../../sass/components/_alert.scss';

const Alert = ({ ticker, alert }) => {
  console.log(alert);
  return (
    <section className='alert'>
      <div className='content'>
        {(alert.cross_time !== null) ? (
          <p> {ticker} has crossed! </p>
        ) : (
          <p> Price {(alert.current_price < alert.ema13) ? `below` : `above`} 13EMA </p>
        )}
         

        <p> {alert.current_time} </p>
        <p> 13EMA: {alert.ema13} </p> <p> 63EMA: {alert.ema63} </p>
        <p> Current price: {alert.current_price} </p>
      </div>
      <div className='stoplight'>

      </div>
    </section>
  );
};

export default Alert;