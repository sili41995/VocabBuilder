import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(8)};

  & > a {
    color: rgba(18, 20, 23, 0.5);
    font-family: MacPaw Fixel Display;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0%;
    text-decoration-line: underline;
  }
`;
