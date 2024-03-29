import styled from '@emotion/styled';

export const Form = styled.form``;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};
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
