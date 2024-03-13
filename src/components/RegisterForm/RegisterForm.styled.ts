import styled from '@emotion/styled';

export const Title = styled.p`
  color: rgb(18, 20, 23);
  font-family: MacPaw Fixel Display;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -2%;
`;

export const Description = styled.p`
  margin-top: ${({ theme }) => theme.spacing(5)};
  color: rgba(18, 20, 23, 0.8);
  font-family: MacPaw Fixel Display;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0%;
`;

export const Form = styled.form`
  margin-top: ${({ theme }) => theme.spacing(8)};

  & a {
    color: rgba(18, 20, 23, 0.5);
    font-family: MacPaw Fixel Display;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0%;
    text-decoration-line: underline;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Input = styled.input`
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

export const ShowPassBtn = styled.button`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  border: none;
  background-color: transparent;

  & > svg {
    display: block;
  }
`;

export const ControlsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(8)};
`;

export const SubmitFormBtn = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  border-radius: 30px;
  background-color: rgb(133, 170, 159);
  color: rgb(252, 252, 252);
  font-family: MacPaw Fixel Display;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  letter-spacing: 0%;
`;
