import { useState } from "react";
import { Link } from "react-router-dom";

function Register({ userRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    userRegister(email, password);
  }

  return (
    <>
      <form className="authorizForm" onSubmit={handleSubmit}>
        <h2 className="authorizForm__title">Регистрация</h2>
        <input
          className="authorizForm__input authorizForm__input_email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          className="authorizForm__input authorizForm__input_password"
          type="password"
          value={password}
          placeholder="Пароль"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit" className="authorizForm__button">
          Зарегистрироваться
        </button>
        <Link to="/signin" className="authorizForm__link">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </>
  );
}

export default Register;
