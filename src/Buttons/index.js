import "./style.css";

const Buttons = () => {
  return (
    <div className="buttons">
      <button className="buttons__button">Przelicz</button>
      <button className="buttons__button" type="reset">
        Wyczyść
      </button>
    </div>
  );
};

export default Buttons;
