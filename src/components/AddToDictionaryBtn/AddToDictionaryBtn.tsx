import { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IProps } from './AddToDictionaryBtn.types';
import { Button, Title } from './AddToDictionaryBtn.styled';

const AddToDictionaryBtn: FC<IProps> = ({ onClick }) => (
  <Button type='button' onClick={onClick}>
    <Title>Add to dictionary</Title>
    <FaArrowRight size={20} />
  </Button>
);

export default AddToDictionaryBtn;
