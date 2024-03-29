import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  border-radius: 30px;
  background-color: rgb(133, 170, 159);
  color: rgb(252, 252, 252);
  font-family: MacPaw Fixel Display;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  letter-spacing: 0%;

  &:disabled {
    background-color: rgb(165, 192, 184);
  }
`;
