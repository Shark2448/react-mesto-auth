import headerLogo from "../images/logo.svg";
import { Route, Link } from "react-router-dom";

function Header({ userData, onSignOut }) {
  return (
    <header className="header">
      <img src={headerLogo} alt="лого" className="header__logo" />
      <div className="header__case">
        <Route exact path="/">
          <p className="header__email">{userData.email}</p>
          <p className="header__link" onClick={onSignOut}>Выйти</p>
        </Route>
        <Route path="/signup">
          <Link to="signin" className="header__link header__link_authoriz">
            Войти
          </Link>
        </Route>
        <Route path="/signin">
          <Link to="signup" className="header__link header__link_authoriz">
            Регистрация
          </Link>
        </Route>
      </div>
    </header>
  );
}

export default Header;
