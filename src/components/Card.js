import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "card__delete-button_active" : " "
  }`;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : " "
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className="card">
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <img
        src={card.link}
        alt={card.name}
        className="card__img"
        onClick={handleClick}
      />
      <div className="card__under">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p className="card__likes">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
