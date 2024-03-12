import { PagePaths } from '@/constants';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/icons/logo.svg?react';
import { Container, Nav, Title } from './NavigationBar.styled';

const NavigationBar: FC = () => {
  return (
    <Container>
      <Nav>
        <Link to={PagePaths.home}>
          <Logo />
          <Title>VocabBuilder</Title>
        </Link>
      </Nav>
    </Container>
  );
};

export default NavigationBar;
