import styled from '@emotion/styled';

export const Form = styled.form``;

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 18px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
`;

export const InputWrap = styled.div`
  position: relative;
  width: calc(100% / 2);

  border-right: 1px solid #dbdbdb;
  border-radius: 8px 0px 0px 0px;
  background-color: #fcfcfc;

  &:last-of-type {
    border: 1px solid #dbdbdb;
    border-radius: 0px 8px 8px 0px;
  }
`;

export const Input = styled.textarea`
  display: block;
  width: 100%;
  height: 302px;
  resize: none;
  border: none;
  padding: 22px;
  color: #121417;
  font-family: MacPaw Fixel Display;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;

  &:disabled {
    background-color: transparent;
  }

  &::placeholder {
    color: currentColor;
  }
`;

export const NextBtn = styled.button`
  position: absolute;
  left: 22px;
  bottom: 24px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: 0;
  border: none;
  background-color: transparent;

  & > svg {
    color: #85aa9f;
  }
`;

export const NextBtnTitle = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
`;

export const BtnList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: ${({ theme }) => theme.spacing(20)};
`;

export const ListItem = styled.li``;

export const SubmitBtn = styled.button`
  min-width: 203px;
  height: 56px;
  border: none;
  border-radius: 28px;
  background-color: #85aa9f;
  padding-left: 14px;
  padding-right: 14px;
  color: #fcfcfc;
  font-family: MacPaw Fixel Display;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
`;

export const CancelBtn = styled.button`
  min-width: 203px;
  height: 56px;
  padding-left: 14px;
  padding-right: 14px;
  border: 1px solid #85aa9f;
  border-radius: 30px;
  color: #85aa9f;
  font-family: MacPaw Fixel Display;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
`;

export const Label = styled.label`
  position: absolute;
  right: 22px;
  top: 22px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const InputTitle = styled.span`
  color: #121417;
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
