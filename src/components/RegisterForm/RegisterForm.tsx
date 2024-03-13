import { PagePaths, regExp } from '@/constants';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { LuEyeOff } from 'react-icons/lu';
import { SubmitHandler, useForm } from 'react-hook-form';
import { INewUser } from '@/types/types';
import {
  ControlsWrap,
  Description,
  Form,
  Input,
  InputWrap,
  InputsContainer,
  ShowPassBtn,
  SubmitFormBtn,
  Title,
} from './RegisterForm.styled';

const RegisterForm: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    // formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<INewUser>();

  const onShowPassBtnClick = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFormSubmit: SubmitHandler<INewUser> = (data) => {
    console.log(data);
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
            type='text'
            {...register('name', {
              required: true,
            })}
            placeholder='Name'
          />
          <Input
            type='email'
            {...register('email', {
              required: true,
              pattern: regExp.email,
            })}
            placeholder='Email'
          />
          <InputWrap>
            <Input
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: true,
                pattern: regExp.password,
              })}
              placeholder='Password'
            />
            <ShowPassBtn type='button' onClick={onShowPassBtnClick}>
              <LuEyeOff size={20} />
            </ShowPassBtn>
          </InputWrap>
        </InputsContainer>
        <ControlsWrap>
          <SubmitFormBtn type='submit'>Register</SubmitFormBtn>
          <Link to={PagePaths.login}>Login</Link>
        </ControlsWrap>
      </Form>
    </>
  );
};

export default RegisterForm;
