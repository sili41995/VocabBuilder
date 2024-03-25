import styled from '@emotion/styled';
import { IStyledProps } from './ProgressIndicator.types';

export const Circle = styled.div<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  padding: ${({ theme }) => theme.spacing()};
  background: ${({ progress = 0 }) =>
    `conic-gradient(#2BD627 0deg ${(360 / 100) * progress}deg, #D4F8D3 ${
      (360 / 100) * progress
    }deg 360deg)`};
  border-radius: 50%;
`;

export const Emptiness = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fcfcfc;
  border-radius: 50%;
`;
