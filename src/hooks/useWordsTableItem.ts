import {
  addToDictionary,
  deleteWord,
  getStatistics,
} from '@/redux/words/operations';
import { useAppDispatch } from './redux';
import { useState } from 'react';

const useWordsTableItem = (id: string) => {
  const [showEditWordMenu, setShowEditWordMenu] = useState<boolean>(false);
  const [showEditWordWin, setShowEditWordWin] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onAddToDictionaryBtnClick = () => {
    dispatch(addToDictionary(id));
  };

  const setShowEditWordWinState = () => {
    setShowEditWordWin((prevState) => !prevState);
  };

  const setShowEditWordMenuState = () => {
    setShowEditWordMenu((prevState) => !prevState);
  };

  const onActionsBtnClick = () => {
    setShowEditWordMenuState();
  };

  const onDeleteBtnClick = () => {
    dispatch(deleteWord(id))
      .unwrap()
      .then(() => {
        dispatch(getStatistics());
      });
  };

  const onEditBtnClick = () => {
    setShowEditWordWinState();
    setShowEditWordMenuState();
  };

  return {
    onAddToDictionaryBtnClick,
    onActionsBtnClick,
    showEditWordMenu,
    onDeleteBtnClick,
    onEditBtnClick,
    showEditWordWin,
    setShowEditWordWinState,
  };
};

export default useWordsTableItem;
