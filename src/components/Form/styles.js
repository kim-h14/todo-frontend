import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
  @media (max-width: 420px) {
  flex-direction: column;
  }
`;

export const Input = styled.input`
  background-color: #F6F5F2;
  width: 100%;
  padding: 8px;
  border: 1px solid #F3D0D7;
  border-radius: 8px;

  &:focus {
  border: 5px solid #F3D0D7;
  outline: none;
  }
`;

export const Button = styled.button`
  background-color: #F3D0D7;
  border-radius: 18px;
  border: 2px solid #F3D0D7;
  color: #7469B6;
  margin-left: 1em;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  @media (max-width: 420px) {
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
}
`;