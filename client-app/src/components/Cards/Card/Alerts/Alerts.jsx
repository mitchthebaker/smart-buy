import Alert from './Alert';

// sass 
import '../../../../sass/components/_alerts.scss';

const Alerts = ({ ticker, interval, alerts }) => {
  return (
    <section className='alerts'>
      {alerts ? (
        alerts.map((alert, idx) => (
          <Alert 
            key={alert.alert_id}
            idx={idx}
            ticker={ticker}
            interval={interval}
            alert={alert}
          />
        ))
      ) : (
        <span> No alerts yet </span>
      )}
    </section>
  );
};

export default Alerts;