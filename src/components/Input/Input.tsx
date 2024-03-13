import { FC } from 'react';
import { IProps } from './Input.types';
import { InputWrap, StyledInput } from './Input.styled';

const Input: FC<IProps> = ({ type, settings, placeholder, button }) => {
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

export default Input;
