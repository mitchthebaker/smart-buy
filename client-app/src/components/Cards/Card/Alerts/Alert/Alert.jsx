import '../../../../../sass/components/_alert.scss';
import '../../../../../sass/base/_typography.scss';

// components
import AlertContent from './AlertContent';
import StoplightWrapper from './StoplightWrapper';

const Alert = ({ idx, ticker, interval, alert }) => {
  console.log(alert);
  return (
    <section className='alert'>
      {/* make separator into its own component, simplify class names */}
      {(alert.cross_time !== null) ? (
        <div className='cross-separator-wrapper'>
          <div className='cross-separator'> </div>
        </div>
      ) : (
        <>
          {idx !== 0 && 
            <div className='alert-separator-wrapper'></div>
          }
        </>
      )}
      
      <AlertContent ticker={ticker} interval={interval} alert={alert} />
      <StoplightWrapper alert={alert} />
    </section>
  );
};

export default Alert;