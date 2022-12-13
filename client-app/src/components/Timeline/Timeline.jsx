import Cards from '../Cards';
import Spinner from 'react-spinkit';
import { useGetTimelineQuery } from '../../store/services/timelineApi';

const Timeline = () => {
  const { data, error, isLoading } = useGetTimelineQuery();

  if(isLoading) {
    return <Spinner name='folding-cube' />
  }
  if(error) {
    return <span> An error occurred </span>
  }

  return (
    <Cards cards={data.cards} />
  );
};

export default Timeline;