//import { useSelector, useDispatch } from 'react-redux';
//import selectCards from '../../store/cardsSlice';

const Cards = ({ cards }) => {
  //const cards = useSelector(selectCards);

  return (
    <section>
      {cards.map(({timeline_card_id, ema13, ema63}) => (
        <span key={timeline_card_id}> {ema13} {ema63} </span>
      ))}
    </section>
  );
};

export default Cards;