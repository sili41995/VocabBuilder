import { FC } from 'react';
import { IProps } from './WordsTableItem.types';
import ProgressIndicator from '../ProgressIndicator';
import AddToDictionaryBtn from '../AddToDictionaryBtn';
import { Data, Row } from '../WordsTable/WordsTable.styled';
import { useAppDispatch } from '@/hooks/redux';
import { addToDictionary } from '@/redux/words/operations';

const WordsTableItem: FC<IProps> = ({ word, isRecommendPage }) => {
  const { category, en, ua, progress, _id } = word;
  const dispatch = useAppDispatch();

  const onAddToDictionaryBtnClick = () => {
    dispatch(addToDictionary(_id));
  };

  return (
    <Row isRecommendPage={isRecommendPage}>
      <Data>{en}</Data>
      <Data>{ua}</Data>
      <Data>{category} </Data>
      <Data>
        {isRecommendPage ? (
          <AddToDictionaryBtn onClick={onAddToDictionaryBtnClick} />
        ) : (
          <ProgressIndicator progress={progress} />
        )}
      </Data>
    </Row>
  );
};

export default WordsTableItem;
