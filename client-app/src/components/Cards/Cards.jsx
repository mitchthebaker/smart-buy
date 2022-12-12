import { useSelector, useDispatch } from 'react-redux';
import selectCards from '../../store/cardsSlice';

const Cards = () => {
  const cards = useSelector(selectCards);

  return (
    <section>
      {cards.map((card) => (
        <span> {card} </span>
      ))}
    </section>
  );
};

export default Cards;