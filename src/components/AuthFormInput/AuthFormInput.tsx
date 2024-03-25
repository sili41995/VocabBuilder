import { FC } from 'react';
import { IProps } from './AuthFormInput.types';
import { InputWrap, StyledInput } from './AuthFormInput.styled';

const AuthFormInput: FC<IProps> = ({ type, settings, placeholder, button }) => {
  const input = (
    <StyledInput {...settings} type={type} placeholder={placeholder} />
  );

  return button ? (
    <InputWrap>
      {input}
      {button}
    </InputWrap>
  ) : (
    input
  );
};

export default AuthFormInput;
