import { FC, useState } from 'react';
import { IProps } from './WordsTableItem.types';
import ProgressIndicator from '../ProgressIndicator';
import AddToDictionaryBtn from '../AddToDictionaryBtn';
import {
  ActionsBtn,
  Data,
  Progress,
  ProgressWrap,
  Row,
} from '../WordsTable/WordsTable.styled';
import { useAppDispatch } from '@/hooks/redux';
import { addToDictionary, deleteWord } from '@/redux/words/operations';
import ActionsMenu from '../ActionsMenu';

const WordsTableItem: FC<IProps> = ({ word, isRecommendPage }) => {
  const [showEditWordWin, setShowEditWordWin] = useState<boolean>(false);
  const { category, en, ua, progress, _id } = word;
  const dispatch = useAppDispatch();

  const onAddToDictionaryBtnClick = () => {
    dispatch(addToDictionary(_id));
  };

  const setShowEditWordWinState = () => {
    setShowEditWordWin((prevState) => !prevState);
  };

  const onActionsBtnClick = () => {
    setShowEditWordWinState();
  };

  const onDeleteBtnClick = () => {
    dispatch(deleteWord(_id));
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
          <ProgressWrap>
            <Progress>{`${progress}%`}</Progress>
            <ProgressIndicator progress={progress} />
          </ProgressWrap>
        )}
      </Data>
      {!isRecommendPage && (
        <Data>
          <ActionsBtn type='button' onClick={onActionsBtnClick}>
            ...
          </ActionsBtn>
          {showEditWordWin && (
            <ActionsMenu onDeleteBtnClick={onDeleteBtnClick} />
          )}
        </Data>
      )}
    </Row>
  );
};

export default WordsTableItem;
