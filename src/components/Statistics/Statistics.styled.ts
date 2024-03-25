import styled from '@emotion/styled';

export const Text = styled.p`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
  font-family: MacPaw Fixel Display;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0%;
`;

export const Title = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-size: 16px;
`;

export const Count = styled.span`
  color: rgb(18, 20, 23);
  font-size: 20px;
`;
