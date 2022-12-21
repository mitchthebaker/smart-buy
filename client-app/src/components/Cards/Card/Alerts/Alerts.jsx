import Alert from './Alert';

// sass 
import '../../../../sass/components/_alerts.scss';

const Alerts = ({ ticker, alerts }) => {
  return (
    <section className='alerts'>
      {alerts ? (
        alerts.map((alert) => (
          <Alert 
            key={alert.alert_id}
            ticker={ticker}
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