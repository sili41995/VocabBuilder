import { PagePaths } from '@/constants';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/icons/logo.svg?react';
import { Container, Nav, Title } from './NavigationBar.styled';
import { useAppSelector } from '@/hooks/redux';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { IProps } from './NavigationBar.types';
import NavLinks from '@/components/NavLinks';
import UserBar from '@/components/UserBar';

const NavigationBar: FC<IProps> = ({ privateNavLinks }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <Container>
      <Nav>
        <Link to={PagePaths.home}>
          <Logo />
          <Title>VocabBuilder</Title>
        </Link>
        {isLoggedIn && <NavLinks navLinks={privateNavLinks} />}
      </Nav>
      {isLoggedIn && <UserBar />}
    </Container>
  );
};

export default NavigationBar;
