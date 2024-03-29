import { FC } from 'react';
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
import ActionsMenu from '../ActionsMenu';
import ModalWin from '../ModalWin';
import EditWordForm from '../EditWordForm';
import { useWordsTableItem } from '@/hooks';

const WordsTableItem: FC<IProps> = ({ word, isRecommendPage }) => {
  const { category, en, ua, progress, _id } = word;
  const {
    onAddToDictionaryBtnClick,
    onActionsBtnClick,
    showEditWordMenu,
    onDeleteBtnClick,
    onEditBtnClick,
    showEditWordWin,
    setShowEditWordWinState,
  } = useWordsTableItem(_id);

  return (
    <>
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
            {showEditWordMenu && (
              <ActionsMenu
                onDeleteBtnClick={onDeleteBtnClick}
                onEditBtnClick={onEditBtnClick}
              />
            )}
          </Data>
        )}
      </Row>
      {showEditWordWin && (
        <ModalWin setModalWinState={setShowEditWordWinState}>
          <EditWordForm
            setModalWinState={setShowEditWordWinState}
            word={word}
          />
        </ModalWin>
      )}
    </>
  );
};

export default WordsTableItem;
