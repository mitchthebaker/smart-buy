import Cards from '../Cards';
import Spinner from 'react-spinkit';
import { useGetTimelineQuery } from '../../store/services/timelineApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { convertToDate, convertToTime } from '../../helpers';

const Timeline = () => {
  const [loaded, setLoaded] = useState(false);
  const { data, err } = useGetTimelineQuery();

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
            <Cards cards={data.cards} />
          </>
        )}
      { err && <span> An error occurred </span> }
    </section>
  );
};

export default Timeline;