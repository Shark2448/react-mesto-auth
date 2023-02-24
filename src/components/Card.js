function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="card">
      <button type="button" className="card__delete-button"></button>
      <img
        src={card.link}
        alt={card.name}
        className="card__img"
        onClick={handleClick}
      />
      <div className="card__under">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__like-button"></button>
          <p className="card__likes">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
