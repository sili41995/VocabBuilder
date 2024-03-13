import AuthForm from '@/components/AuthForm';
import AuthSection from '@/components/AuthSection/AuthSection';
import RegisterForm from '@/components/RegisterForm';
import { FC } from 'react';

const RegisterPage: FC = () => {
  return (
    <AuthSection>
      <AuthForm>
        <RegisterForm />
      </AuthForm>
    </AuthSection>
  );
};

export default RegisterPage;
