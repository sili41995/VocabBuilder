import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;

  & > a {
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};
    align-items: center;

    & > svg {
      color: rgb(133, 170, 159);
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  gap: ${({ theme }) => theme.spacing(2)};

  & > svg {
    color: rgb(133, 170, 159);
  }
`;

export const BtnTitle = styled.span`
  color: #121417;
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const LinkTitle = styled.span`
  color: #121417;
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
