import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 39px;
`;

export const Image = styled.img``;

export const Description = styled.p`
  margin-top: ${({ theme }) => theme.spacing(4)};
  color: rgba(18, 20, 23, 0.8);
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0%;
  text-align: center;
`;
