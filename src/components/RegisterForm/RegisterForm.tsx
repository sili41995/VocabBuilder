import { PagePaths, regExp } from '@/constants';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LuEyeOff } from 'react-icons/lu';
import { SubmitHandler, useForm } from 'react-hook-form';
import { INewUser } from '@/types/types';

const RegisterForm: FC = () => {
  const {
    register,
    // formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<INewUser>();

  const handleFormSubmit: SubmitHandler<INewUser> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <p>Register</p>
      <p>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          type='text'
          {...register('name', {
            required: true,
          })}
          placeholder='Name'
        />
        <input
          type='email'
          {...register('email', {
            required: true,
            pattern: regExp.email,
          })}
          placeholder='Email'
        />
        <div>
          <input
            type='text'
            {...register('password', {
              required: true,
              pattern: regExp.password,
            })}
            placeholder='Password'
          />
          <button type='button'>
            <LuEyeOff size={20} />
          </button>
        </div>
        <button type='submit'>Register</button>
        <Link to={PagePaths.login}>Login</Link>
      </form>
    </div>
  );
};

export default RegisterForm;
