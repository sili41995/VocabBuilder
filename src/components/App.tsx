import { FC, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from '@/components/PublicRoute';
import Loader from '@/components/Loader';
import SharedLayout from '@/components/SharedLayout';
import { selectIsRefreshing, selectToken } from '@/redux/auth/selectors';
// import { refreshUser } from '@/redux/auth/operations';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { PagePaths } from '@/constants';
import PrivateRoute from './PrivateRoute';

const RegisterPage = lazy(() => import('@/pages/RegisterPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const DictionaryPage = lazy(() => import('@/pages/DictionaryPage'));
const RecommendPage = lazy(() => import('@/pages/RecommendPage'));
const TrainingPage = lazy(() => import('@/pages/TrainingPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const token = useAppSelector(selectToken);

  useEffect(() => {
    if (token) {
      // dispatch(refreshUser());
    }
  }, [dispatch, token]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route
          index
          element={<PublicRoute restricted element={<LoginPage />} />}
        />
        <Route
          path={PagePaths.register}
          element={<PublicRoute restricted element={<RegisterPage />} />}
        />
        <Route
          path={PagePaths.login}
          element={<PublicRoute restricted element={<LoginPage />} />}
        />
        <Route
          path={PagePaths.training}
          element={<PrivateRoute element={<TrainingPage />} />}
        />
        <Route
          path={PagePaths.recommend}
          element={<PrivateRoute element={<RecommendPage />} />}
        />
        <Route
          path={PagePaths.dictionary}
          element={<PrivateRoute element={<DictionaryPage />} />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
