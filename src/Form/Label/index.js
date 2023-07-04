import { StyledLabel } from "./styled";

const Label = ({ text, content }) => {
  return (
    <StyledLabel className="label">
      <span>{text}</span>
      {content}
    </StyledLabel>
  );
};

export default Label;
