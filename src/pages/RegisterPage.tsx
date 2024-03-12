import AuthForm from '@/components/AuthForm';
import Container from '@/components/Container';
import RegisterForm from '@/components/RegisterForm';
import { FC } from 'react';

const RegisterPage: FC = () => {
  return (
    <Container>
      <AuthForm>
        <RegisterForm />
      </AuthForm>
    </Container>
  );
};

export default RegisterPage;
