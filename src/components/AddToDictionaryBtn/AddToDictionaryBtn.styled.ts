import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: 0;
  border: none;
  background-color: transparent;

  & > svg {
    color: rgb(133, 170, 159);
  }
`;

export const Title = styled.span`
  color: #121417;
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
`;
