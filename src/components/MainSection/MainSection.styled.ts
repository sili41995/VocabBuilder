import styled from '@emotion/styled';

export const Section = styled.section`
  height: calc(100vh - 88px);
  background-color: rgb(226, 226, 226);
  padding-top: ${({ theme }) => theme.spacing(20)};
  padding-bottom: ${({ theme }) => theme.spacing(20)};
`;
