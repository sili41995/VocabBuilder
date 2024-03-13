import { InputTypes, Messages, PagePaths, regExp } from '@/constants';
import { FC, useEffect, useState } from 'react';
import { LuEyeOff } from 'react-icons/lu';
import { SubmitHandler, useForm } from 'react-hook-form';
import { INewUser } from '@/types/types';
import {
  Description,
  Form,
  InputsContainer,
  ShowPassBtn,
  Title,
} from './RegisterForm.styled';
import Input from '../Input';
import { toasts } from '@/utils';
import AuthFormControls from '../AuthFormControls';
import { signUp } from '@/redux/auth/operations';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoading } from '@/redux/auth/selectors';

const RegisterForm: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useAppSelector(selectIsLoading);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<INewUser>();
  const passInputType = showPassword ? InputTypes.text : InputTypes.password;

  useEffect(() => {
    errors.name && toasts.errorToast(Messages.nameReqErr);
    errors.email &&
      toasts.errorToast(
        errors.email.type === 'required'
          ? Messages.emailReqErr
          : Messages.emailRegExpErr
      );
    errors.password &&
      toasts.errorToast(
        errors.password.type === 'required'
          ? Messages.passReqErr
          : Messages.passRegExpErr
      );
  }, [isSubmitting, errors]);

  const onShowPassBtnClick = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFormSubmit: SubmitHandler<INewUser> = (data) => {
    dispatch(signUp(data))
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.greetings);
        navigate(PagePaths.dictionary);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  return (
    <>
      <Title>Register</Title>
      <Description>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </Description>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputsContainer>
          <Input
            type={InputTypes.text}
            settings={{
              ...register('name', {
                required: true,
              }),
            }}
            placeholder='Name'
          />
          <Input
            type={InputTypes.email}
            settings={{
              ...register('email', {
                required: true,
                pattern: regExp.email,
              }),
            }}
            placeholder='Email'
          />
          <Input
            type={passInputType}
            settings={{
              ...register('password', {
                required: true,
                pattern: regExp.password,
              }),
            }}
            placeholder='Password'
            button={
              <ShowPassBtn type='button' onClick={onShowPassBtnClick}>
                <LuEyeOff size={20} />
              </ShowPassBtn>
            }
          />
        </InputsContainer>
        <AuthFormControls
          navLinkPath={PagePaths.login}
          navLinkTitle='Login'
          submitBtnDisabled={isLoading}
          submitBtnTitle='Register'
        />
      </Form>
    </>
  );
};

export default RegisterForm;
