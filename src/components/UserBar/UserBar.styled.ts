import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.p`
  color: rgb(18, 20, 23);
  font-family: MacPaw Fixel Display;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const AvatarWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: rgb(133, 170, 159);
  border-radius: 50%;

  & > svg {
    color: rgba(252, 252, 252, 0.7);
  }
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  border: none;
  background-color: transparent;

  & > svg {
    color: #121417;
  }
`;

export const Title = styled.span`
  color: #121417;
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
