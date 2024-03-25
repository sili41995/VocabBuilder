import AuthForm from '@/components/AuthForm';
import AuthSection from '@/components/AuthSection';
import Possibilities from '@/components/Possibilities';
import RegisterForm from '@/components/RegisterForm';
import { FC } from 'react';

const RegisterPage: FC = () => {
  return (
    <AuthSection>
      <AuthForm>
        <RegisterForm />
      </AuthForm>
      <Possibilities />
    </AuthSection>
  );
};

export default RegisterPage;
