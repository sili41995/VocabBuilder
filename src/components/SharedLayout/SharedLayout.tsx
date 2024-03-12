import { FC, Suspense } from 'react';
import NavigationBar from '@/components/NavigationBar';
import Loader from '@/components/Loader';
import { Header, Main } from './SharedLayout.styled';
import Container from '@/components/Container';
import { Outlet } from 'react-router-dom';

const SharedLayout: FC = () => {
  return (
    <>
      <Header>
        <Container>
          <NavigationBar />
        </Container>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
export default SharedLayout;
