import { FC } from 'react';
import { Button } from './SubmitAuthFormBtn.styled';
import { IProps } from './SubmitAuthFormBtn.types';

const SubmitAuthFormBtn: FC<IProps> = ({ title, disabled }) => (
  <Button type='submit' disabled={disabled}>
    {title}
  </Button>
);

export default SubmitAuthFormBtn;
