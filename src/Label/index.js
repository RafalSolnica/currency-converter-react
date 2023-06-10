import "./style.css";

const Label = ({ text, content }) => {
  return (
    <label className="label">
      <span>{text}</span>
      {content}
    </label>
  );
};

export default Label;
