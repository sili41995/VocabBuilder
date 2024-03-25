import Dashboard from '@/components/Dashboard';
import MainSection from '@/components/MainSection';
// import { fetchAllWords } from '@/redux/words/operations';
// import WordsPagination from '@/components/WordsPagination';
// import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import //   selectPage,
//   selectPerPage,
//   selectTotalPages,
'@/redux/words/selectors';
import { FC } from 'react';
// import { selectWords } from '@/redux/words/selectors';
// import WordsTable from '@/components/WordsTable';

const DictionaryPage: FC = () => {
  // const words = useAppSelector(selectWords);
  // const totalPages = useAppSelector(selectTotalPages);
  // const perPage = useAppSelector(selectPerPage);
  // const page = useAppSelector(selectPage);
  // const dispatch = useAppDispatch();

  return (
    <MainSection>
      <Dashboard />
      {/* <WordsTable words={words} /> */}
      {/* <WordsPagination totalPages={totalPages} perPage={perPage} page={page} /> */}
    </MainSection>
  );
};

export default DictionaryPage;
