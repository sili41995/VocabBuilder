import styled from '@emotion/styled';

export const List = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  transform: translateY(${({ theme }) => theme.spacing()});
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(6)}`};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
`;

export const Item = styled.li``;

export const Label = styled.label`
  &:is(:hover) {
    cursor: pointer;
  }
`;

export const Title = styled.span`
  color: rgb(18, 20, 23);
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0%;
`;

export const Input = styled.input`
  position: fixed;
  transform: scale(0);
`;
