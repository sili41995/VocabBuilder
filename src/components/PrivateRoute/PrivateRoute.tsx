import { Navigate, useLocation } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectToken,
  selectError,
} from '@/redux/auth/selectors';
import { useAppSelector } from '@/hooks/redux';
import { IProps } from './PrivateRoute.types';
import { PagePaths } from '@/constants';
import { FC } from 'react';

const PrivateRoute: FC<IProps> = ({ element }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const token = useAppSelector(selectToken);
  const error = useAppSelector(selectError);
  const location = useLocation();
  const shouldRedirect = !isLoggedIn && (!token || error);

  return shouldRedirect ? (
    <Navigate to={PagePaths.login} state={{ from: location }} />
  ) : (
    element
  );
};

export default PrivateRoute;
