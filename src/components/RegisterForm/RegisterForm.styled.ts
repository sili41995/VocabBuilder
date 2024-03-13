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
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
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
