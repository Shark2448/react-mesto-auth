import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            isOpen={isOpen}
            onClose={onClose}
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
            }
          />
    )
}

export default EditAvatarPopup;