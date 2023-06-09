import "./style.css";

const Buttons = ({ resetForm }) => {
  return (
    <div className="buttons">
      <button className="buttons__button">Przelicz</button>
      <button
        className="buttons__button"
        type="reset"
        onClick={() => resetForm()}
      >
        Wyczyść
      </button>
    </div>
  );
};

export default Buttons;
