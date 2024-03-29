import { FC, useEffect, useState } from 'react';
import Filters from '@/components/Filters';
import Statistics from '@/components/Statistics';
import DashboardControls from '@/components/DashboardControls';
import { Container, StatisticsWrap } from './Dashboard.styled';
import ModalWin from '../ModalWin';
import AddWordForm from '../AddWordForm';
import { useAppDispatch } from '@/hooks/redux';
import { getStatistics } from '@/redux/words/operations';

const Dashboard: FC = () => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Filters />
        <StatisticsWrap>
          <Statistics />
          <DashboardControls setModalWinState={setModalWinState} />
        </StatisticsWrap>
      </Container>
      {showModalWin && (
        <ModalWin setModalWinState={setModalWinState}>
          <AddWordForm setModalWinState={setModalWinState} />
        </ModalWin>
      )}
    </>
  );
};

export default Dashboard;
