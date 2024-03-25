import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatisticsWrap = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
`;
