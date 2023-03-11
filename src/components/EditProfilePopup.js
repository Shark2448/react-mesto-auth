import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const currentUser = useContext(CurrentUserContext);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
    }

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen])
    

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      children={
        <>
          <input
            name="profileName"
            type="text"
            className="popup__field popup__field_profile_name"
            onChange={handleChangeName}
            placeholder="Имя профиля"
            minLength="2"
            maxLength="40"
            value={name || ''}
            required
          />
          <span className="profileName-error popup__error-text"></span>
          <input
            name="profileAbout"
            type="text"
            className="popup__field popup__field_profile_about"
            onChange={handleChangeDescription}
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            value={description || ''}
            required
          />
          <span className="profileAbout-error popup__error-text"></span>
        </>
      }
    />
  );
}

export default EditProfilePopup;
