import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
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
