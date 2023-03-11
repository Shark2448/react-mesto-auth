function PopupWithForm({ title, name, children, isOpen, onClose, onSubmit, buttonText }) {
  return (
    <section className={`popup popup_${name}${isOpen ? " popup_opened" : ""}`}>
      <div className={`popup__container popup__container_${name}`}>
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className={`popup__${name}-form`}
          name={`${name}-form`}
          onSubmit={onSubmit}
        >
          {children}
          <button type="submit" className="popup__save-button">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
