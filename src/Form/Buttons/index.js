import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ resetForm }) => {
  return (
    <ButtonsContainer>
      <Button>Przelicz</Button>
      <Button type="reset" onClick={() => resetForm()}>
        Wyczyść
      </Button>
    </ButtonsContainer>
  );
};

export default Buttons;
