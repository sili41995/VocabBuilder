import Dashboard from '@/components/Dashboard';
import MainSection from '@/components/MainSection';
import WordsPagination from '@/components/WordsPagination';
import { useAppSelector } from '@/hooks/redux';
import {
  selectPage,
  selectPerPage,
  selectTotalPages,
} from '@/redux/words/selectors';
import { FC } from 'react';

const DictionaryPage: FC = () => {
  const totalPages = useAppSelector(selectTotalPages) ?? 0;
  const perPage = useAppSelector(selectPerPage) ?? 0;
  const page = useAppSelector(selectPage) ?? 0;

  return (
    <MainSection>
      <Dashboard />
      {/* <WordsPagination totalPages={totalPages} perPage={perPage} page={page} /> */}
    </MainSection>
  );
};

export default DictionaryPage;
