import Card from "./Card";

function Main({
  onEditProfile,
  onEditAvatar,
  onAddPlace,
  onCardClick,
  userName,
  userDescription,
  userAvatar,
  cards
}) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__img-container">
          <img src={userAvatar} alt="аватар" className="profile__img" />
          <div className="profile__avatar" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            type="button"
            className="profile__edit-button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="popup popup_confirm">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__confirm-form" name="confirm-form">
            <button type="submit" className="popup__confirm-button">
              Да
            </button>
          </form>
        </div>
      </section>
      <section className="photo-cards">
        {cards.map((card) => (
          <Card
          card={card}
          onCardClick={onCardClick} />
          
        ))}
      </section>  
    </main>
  );
}

export default Main;
