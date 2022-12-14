import Cards from '../Cards';
import Spinner from 'react-spinkit';
import { useGetTimelineByIdQuery } from '../../store/services/timelineApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { convertToDate, convertToTime } from '../../helpers';

const Timeline = () => {
  const [loaded, setLoaded] = useState(false);
  const { data, err } = useGetTimelineByIdQuery('b2e1b143-c4d2-45b4-9d54-3ec09cc0f8c8');

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <section>
      { !loaded ? (
          <Spinner name='folding-cube' />
        ) : (
          <>
            <span> Today: { convertToDate(data.created_at) } { convertToTime(data.created_at) } </span>
            <Cards cards={data.cards} ticker={data.ticker} interval={data.interval} />
          </>
        )}
      { err && <span> An error occurred </span> }
    </section>
  );
};

export default Timeline;