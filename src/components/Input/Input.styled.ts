import styled from '@emotion/styled';

export const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  padding-left: 18px;
  padding-right: ${({ theme }) => theme.spacing(10)};
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 15px;
  color: rgb(18, 20, 23);
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0%;
`;

export const InputWrap = styled.div`
  position: relative;
`;
