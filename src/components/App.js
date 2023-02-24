import React, { useEffect, useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Card from './Card.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import {api} from '../utils/Api.js'
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});



  useEffect(() => {
      api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    api.getInitialCards()
    .then((res) => {
      setCards(res)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  const  handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <body className="page">
      <div className="page__container">
        <Header />
        <Main
          cards={cards}
          userName={userName}
          userDescription={userDescription}
          userAvatar={userAvatar}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick} />
        <Footer />
      </div>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      children={
        <>
          <input
            type="url"
            name="avatarLink"
            className="popup__field popup__field_avatar_link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="avatarLink-error popup__error-text"></span>
        </>
      } />
      <PopupWithForm
        title="Новое место"
        name="card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              name="cardName"
              type="text"
              className="popup__field popup__field_card_name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="cardName-error popup__error-text"></span>
            <input
              name="cardLink"
              type="url"
              className="popup__field popup__field_card_link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="cardLink-error popup__error-text"></span>
          </>
        } />
      <PopupWithForm 
        title="Редактировать профиль" 
        name="profile" 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              name="profileName"
              type="text"
              className="popup__field popup__field_profile_name"
              placeholder="Имя профиля"
              minLength="2"
              maxLength="40"
              value=""
              required
            />
            <span className="profileName-error popup__error-text"></span>
            <input
              name="profileAbout"
              type="text"
              className="popup__field popup__field_profile_about"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              value=""
              required
            />
            <span className="profileAbout-error popup__error-text"></span>
          </>
        } 
      />
    </body>
  );
}

export default App;
