import { FC } from 'react';
import SubmitAuthFormBtn from '@/components/SubmitAuthFormBtn';
import { Link } from 'react-router-dom';
import { IProps } from './AuthFormControls.types';
import { Container } from './AuthFormControls.styled';

const AuthFormControls: FC<IProps> = ({
  submitBtnTitle,
  submitBtnDisabled,
  navLinkPath,
  navLinkTitle,
}) => {
  return (
    <Container>
      <SubmitAuthFormBtn title={submitBtnTitle} disabled={submitBtnDisabled} />
      <Link to={navLinkPath}>{navLinkTitle}</Link>
    </Container>
  );
};

export default AuthFormControls;
