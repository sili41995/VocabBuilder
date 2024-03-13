import { FC } from 'react';
import { Button } from './SubmitFormBtn.styled';
import { IProps } from './SubmitFormBtn.types';

const SubmitFormBtn: FC<IProps> = ({ title, disabled }) => (
  <Button type='submit' disabled={disabled}>
    {title}
  </Button>
);

export default SubmitFormBtn;
