import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

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

export const RadioBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const RadioBtnWrap = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const RadioBtn = styled.input`
  width: 24px;
  height: 24px;
`;

export const RadioBtnTitle = styled.span`
  color: #121417;
  font-family: MacPaw Fixel Display;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.36;
`;
