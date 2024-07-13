import styled from "styled-components";

export const KeyContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.8rem;
  list-style-type: square;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #F3D0D7;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const BulletPoint = styled.li`
  &:last-child {
    color: #AF2655;
  }

  @media (max-width: 420px) {
    padding: 5px 0px;
  }
`;