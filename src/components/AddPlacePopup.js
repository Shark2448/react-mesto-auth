import { useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [cardName, setCardName] = useState("");
  const [cardLink, setCardLink] = useState("");

  const cardNameRef = useRef();
  const cardLinkRef = useRef();

  function handleCardName(e) {
    setCardName(e.target.value);
  }

  function handleCardLink(e) {
    setCardLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: cardNameRef.current.value,
      link: cardLinkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            name="cardName"
            type="text"
            className="popup__field popup__field_card_name"
            ref={cardNameRef}
            value={cardName}
            onChange={handleCardName}
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
            ref={cardLinkRef}
            value={cardLink}
            onChange={handleCardLink}
            placeholder="Ссылка на картинку"
            required
          />
          <span className="cardLink-error popup__error-text"></span>
        </>
      }
    />
  );
}

export default AddPlacePopup;
