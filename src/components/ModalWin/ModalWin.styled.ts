import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.2);
  overflow-y: scroll;
`;

export const Container = styled.div`
  width: 628px;
  position: relative;
  border-radius: 30px;
  background-color: #85aa9f;
  padding: ${({ theme }) => theme.spacing(16)};
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  border: 0;
  background-color: transparent;

  & svg {
    display: block;
    color: #fcfcfc;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;
