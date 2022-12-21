import '../../../../../sass/components/_alert.scss';
import '../../../../../sass/base/_typography.scss';

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
      <div className='stoplight-wrapper'>
          <div className='stoplight'>
            <div className='green--light'>

            </div>
            <div className='yellow--light'>

            </div>
            <div className='red--light'>

            </div>
          </div>
          <div className='stoplight-text'>
            {(alert.cross_time !== null) ? (
              <p> New <b> TREND ACTIVATED </b> </p>
            ) : (
              <p></p>
            )}
          </div>
      </div>
    </section>
  );
};

export default Alert;