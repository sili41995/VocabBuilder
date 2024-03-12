import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  padding-left: ${({ theme }) => theme.padding.container}px;
  padding-right: ${({ theme }) => theme.padding.container}px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 375px) {
    width: ${({ theme }) =>
      theme.containerWidth.mobile + theme.padding.container * 2}px;
  }

  @media screen and (min-width: 768px) {
    width: ${({ theme }) =>
      theme.containerWidth.tablet + theme.padding.container * 2}px;
  }

  @media screen and (min-width: 1440px) {
    width: ${({ theme }) =>
      theme.containerWidth.desktop + theme.padding.container * 2}px;
  }
`;
