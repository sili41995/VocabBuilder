import styled from '@emotion/styled';

export const Title = styled.p`
  color: #fcfcfc;
  font-family: MacPaw Fixel Display;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
`;

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.spacing(5)};
  color: rgba(252, 252, 252, 0.8);
  font-family: MacPaw Fixel Display;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Form = styled.form`
  margin-top: ${({ theme }) => theme.spacing(8)};
`;

export const SelectWrap = styled.div``;

export const Select = styled.select`
  width: 204px;
  height: 48px;
  padding-left: ${({ theme }) => theme.spacing(6)};
  padding-right: ${({ theme }) => theme.spacing(6)};
  border: 1px solid rgba(252, 252, 252, 0.3);
  border-radius: 15px;
  background-color: transparent;
  color: #fcfcfc;
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Option = styled.option`
  color: #121417;
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
  color: #fcfcfc;
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};
  margin-top: 38px;
`;

export const InputsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`;

export const Input = styled.input`
  height: 56px;
  padding-left: 18px;
  padding-right: 18px;
  border: 1px solid rgba(252, 252, 252, 0.3);
  border-radius: 15px;
  background-color: transparent;
  color: #fcfcfc;
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const LabelsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(11)};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const InputTitle = styled.span`
  color: #fcfcfc;
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const BtnList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(8)};
`;

export const ListItem = styled.li``;
