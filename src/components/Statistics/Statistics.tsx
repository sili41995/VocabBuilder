import { FC } from 'react';
import { Count, Text, Title } from './Statistics.styled';
import { useAppSelector } from '@/hooks/redux';
import { selectStatistics } from '@/redux/words/selectors';

const Statistics: FC = () => {
  const statistics = useAppSelector(selectStatistics);

  return (
    <Text>
      <Title>To study:</Title>
      <Count>{statistics}</Count>
    </Text>
  );
};

export default Statistics;
