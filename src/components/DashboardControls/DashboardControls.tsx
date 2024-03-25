import { PagePaths } from '@/constants';
import { FC } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import {
  BtnTitle,
  Button,
  Container,
  LinkTitle,
} from './DashboardControls.styled';
import { IProps } from './DashboardControls.types';

const DashboardControls: FC<IProps> = ({ setModalWinState }) => {
  return (
    <Container>
      <Button type='button' onClick={setModalWinState}>
        <BtnTitle>Add word</BtnTitle>
        <FaPlus size={20} />
      </Button>
      <Link to={PagePaths.training}>
        <LinkTitle>Train oneself</LinkTitle>
        <FaArrowRight size={20} />
      </Link>
    </Container>
  );
};

export default DashboardControls;
