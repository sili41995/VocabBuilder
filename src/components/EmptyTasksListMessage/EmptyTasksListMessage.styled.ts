import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(8)};
`;

export const ContentWrap = styled.div`
  width: 581px;
`;

export const Title = styled.p`
  color: #121417;
  font-family: MacPaw Fixel Display;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.spacing(8)};
  color: #121417;
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Image = styled.img`
  width: 203px;
  height: 230px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: ${({ theme }) => theme.spacing(16)};

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 215px;
    height: 56px;
    padding-left: 14px;
    padding-right: 14px;
    border-radius: 28px;
    background-color: #85aa9f;
    color: #fcfcfc;
    font-family: MacPaw Fixel Display;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.56;
    text-align: center;
  }
`;

export const Button = styled.button`
  min-width: 203px;
  height: 56px;
  padding-left: 14px;
  padding-right: 14px;
  border: 1px solid #85aa9f;
  border-radius: 28px;
  background-color: transparent;
  color: #85aa9f;
  font-family: MacPaw Fixel Display;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
`;
