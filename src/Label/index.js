const Label = ({ text, content }) => {
  return (
    <label className="form__label">
      <span>{text}</span>
      {content}
    </label>
  );
};

export default Label;
