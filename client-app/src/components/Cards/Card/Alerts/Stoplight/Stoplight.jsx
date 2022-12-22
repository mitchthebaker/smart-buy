import '../../../../../sass/components/_stoplight.scss';

const Stoplight = ({ alert }) => {
  return (
    <div className='stoplight-wrapper'>
      <div className='stoplight'>
        <div className='green--light'></div>
        <div className='yellow--light'></div>
        <div className='red--light'></div>
      </div>
      <div className='stoplight-text'>
        {(alert.cross_time !== null) ? (
          <p> New <b> TREND ACTIVATED </b> </p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Stoplight;