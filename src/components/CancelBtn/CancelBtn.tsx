import { FC } from 'react';
import { Button } from './CancelBtn.styled';
import { IProps } from './CancelBtn.types';

const CancelBtn: FC<IProps> = ({ onClick, title }) => (
  <Button type='button' onClick={onClick}>
    {title}
  </Button>
);

export default CancelBtn;
