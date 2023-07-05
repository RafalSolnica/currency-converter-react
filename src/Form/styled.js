import { styled } from "styled-components";

export const StyledForm = styled.form`
  margin-top: 10px;
  padding: 10px;
  padding-bottom: 0;
  flex: 1 1 auto;
`;

export const Fieldset = styled.fieldset`
  padding: 20px 5%;
  border: 1px solid ${({ theme }) => theme.color.doveGrey};
  box-shadow: inset 1px 1px 8px ${({ theme }) => theme.color.silverChalice};
  border-radius: 10px;
  background: ${({ theme }) => theme.color.semiTransparentGrey};
`;

export const Legend = styled.legend`
  background-color: ${({ theme }) => theme.color.codGrey};
  font-size: 25px;
  font-weight: bold;
`;

export const Input = styled.input`
  cursor: pointer;
  width: 130px;
  background-color: ${({ theme }) => theme.color.tundora};
  color: ${({ theme }) => theme.color.white};
  text-align: right;
  font-weight: bold;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.white};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.white};
  }
`;
