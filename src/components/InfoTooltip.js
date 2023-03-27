import success from "../images/Success.svg";
import failed from "../images/Failed.svg";

function InfoTooltip({ onClose, isOpen, isInfoTooltipOk }) {
  return (
    <div className={isOpen ? `popup popup_opened popup_infoTooltip` : `popup popup_infoTooltip`}>
      <form className={`popup__container popup__container_infoTooltip`}>
        <button 
        type="button"
        className="popup__close-button"
        onClick={onClose} />
        <img 
        src={isInfoTooltipOk ? success : failed}
        className="popup__infoimage"
        />
        <h2 className="popup__title popup__title_infoTooltip">
          {isInfoTooltipOk ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </form>
    </div>
  );
}

export default InfoTooltip;