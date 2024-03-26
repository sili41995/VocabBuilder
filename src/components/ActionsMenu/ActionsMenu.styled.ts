import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  top: 55px;
  right: 32px;
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(6)}`};
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 15px;
  box-shadow: 0px 4px 47px 0px rgba(18, 20, 23, 0.08);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ListItem = styled.li``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  border: none;
  padding: 0;
  background-color: transparent;

  & > svg {
    color: #85aa9f;
  }
`;

export const Title = styled.span`
  color: #121417;
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
