import styled from '@emotion/styled';

export const Container = styled.div``;

export const InputsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const InputWrap = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const SearchField = styled.input`
  width: 274px;
  height: 48px;
  background-color: transparent;
  padding-left: ${({ theme }) => theme.spacing(6)};
  padding-right: ${({ theme }) => theme.spacing(11)};
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 15px;
  color: rgb(18, 20, 23);
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0%;

  &::placeholder {
    color: currentColor;
  }
`;
