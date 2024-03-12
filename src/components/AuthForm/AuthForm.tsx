import { FC } from 'react';
import { Container } from './AuthForm.styled';
import { IProps } from './AuthForm.types';

const AuthForm: FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AuthForm;
