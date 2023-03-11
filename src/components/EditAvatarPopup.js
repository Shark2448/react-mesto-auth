import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {

    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            buttonText={isLoading ? "Сохранение..." : "Сохранить"}
            children={
              <>
                <input
                  type="url"
                  name="avatarLink"
                  className="popup__field popup__field_avatar_link"
                  ref={avatarRef}
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