import { FC } from 'react';
import { Button } from './SubmitBtn.styled';
import { IProps } from './SubmitBtn.types';

const SubmitBtn: FC<IProps> = ({ title }) => (
  <Button type='submit'>{title}</Button>
);

export default SubmitBtn;
