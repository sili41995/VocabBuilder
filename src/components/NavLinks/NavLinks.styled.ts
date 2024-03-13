import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ListItem = styled.li`
  & > a {
    display: inline-block;
    border-radius: 15px;
    padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(5)}`};
    color: rgb(18, 20, 23);
    font-family: MacPaw Fixel Display;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.36;
    letter-spacing: 0%;

    &:is(:hover, :focus, .active) {
      background-color: rgb(133, 170, 159);
      color: rgb(252, 252, 252);
    }
  }
`;
