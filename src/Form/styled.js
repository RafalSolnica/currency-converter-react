import { styled } from "styled-components";

export const StyledForm = styled.form`
  margin-top: 10px;
  padding: 10px;
  padding-bottom: 0;
  flex: 1 1 auto;
`;

export const Fieldset = styled.fieldset`
  padding: 20px 5%;
  border: 1px solid #666;
  box-shadow: inset 1px 1px 8px #aaa;
  border-radius: 10px;
  background: rgba(33, 33, 33, 0.7);
`;

export const Legend = styled.legend`
  background-color: #222;
  font-size: 25px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 130px;
  background-color: #444;
  color: #fff;
  text-align: right;
  font-weight: bold;
  border-radius: 4px;
  border: 1px solid #fff;

  &:focus {
    outline: 1px solid #fff;
  }
`;
