import AuthForm from '@/components/AuthForm';
import AuthSection from '@/components/AuthSection';
import LogInForm from '@/components/LogInForm';
import Possibilities from '@/components/Possibilities';
import { FC } from 'react';

const LoginPage: FC = () => (
  <AuthSection>
    <AuthForm>
      <LogInForm />
    </AuthForm>
    <Possibilities />
  </AuthSection>
);

export default LoginPage;
