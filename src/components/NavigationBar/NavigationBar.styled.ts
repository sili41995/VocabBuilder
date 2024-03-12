import styled from '@emotion/styled';

export const Container = styled.div``;

export const Nav = styled.nav`
  & > a {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(4)};

    & > svg {
      width: 36px;
      height: 36px;

      @media screen and (min-width: 768px) {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

export const Title = styled.span`
  color: rgb(18, 20, 23);
  font-family: MacPaw Fixel Display;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0%;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.46;
  }
`;
