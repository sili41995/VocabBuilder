import Dashboard from '@/components/Dashboard';
import MainSection from '@/components/MainSection';
import WordsTable from '@/components/WordsTable';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchAllWords } from '@/redux/words/operations';
import { selectWords } from '@/redux/words/selectors';
import { FC, useEffect } from 'react';

const RecommendPage: FC = () => {
  const dispatch = useAppDispatch();
  const words = useAppSelector(selectWords);

  useEffect(() => {
    const promise = dispatch(fetchAllWords());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <MainSection>
      <Dashboard />
      <WordsTable words={words} />
      {/* <WordsPagination/> */}
    </MainSection>
  );
};

export default RecommendPage;
