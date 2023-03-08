import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ isOpen, onClose, card, onCardDelete }) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(card)
  }

    return (
      <PopupWithForm
        title="Вы уверены?"
        name="confirm"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        buttonText="Да"
      />
    )
}
export default DeleteCardPopup;