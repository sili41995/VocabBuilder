import { FC } from 'react';
import { Count, Text, Title } from './Statistics.styled';
import { useAppSelector } from '@/hooks/redux';
import { selectWords } from '@/redux/words/selectors';

const Statistics: FC = () => {
  const wordsCount = useAppSelector(selectWords).length;
  return (
    <Text>
      <Title>To study:</Title>
      <Count>{wordsCount}</Count>
    </Text>
  );
};

export default Statistics;
