import { useState } from "react";

function Login({ userAuthorization }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    userAuthorization(email, password);
  }
  return (
    <>
      <form className="authorizForm" onSubmit={handleSubmit}>
        <h2 className="authorizForm__title">Вход</h2>
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
          Войти
        </button>
      </form>
    </>
  );
}

export default Login;
