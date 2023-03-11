import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [cardName, setCardName] = useState("");
  const [cardLink, setCardLink] = useState("");

  function handleCardName(e) {
    setCardName(e.target.value);
  }

  function handleCardLink(e) {
    setCardLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: cardName,
      link: cardLink,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
    >
      <input
        name="cardName"
        type="text"
        className="popup__field popup__field_card_name"
        value={cardName}
        onChange={handleCardName}
        placeholder="Название"
      />
      <span className="cardName-error popup__error-text"></span>
      <input
        name="cardLink"
        type="url"
        className="popup__field popup__field_card_link"
        value={cardLink}
        onChange={handleCardLink}
        placeholder="Ссылка на картинку"
        required
      />
      <span className="cardLink-error popup__error-text"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
