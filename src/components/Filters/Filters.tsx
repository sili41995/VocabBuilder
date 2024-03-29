import { ChangeEvt } from '@/types/types';
import debounce from 'debounce';
import { FC, useEffect } from 'react';
import {
  Container,
  InputWrap,
  InputsContainer,
  RadioBtn,
  RadioBtnContainer,
  RadioBtnTitle,
  RadioBtnWrap,
  SearchField,
} from './Filters.styled';
import { GoSearch } from 'react-icons/go';
import FilterItem from '@/components/FilterItem';
import { SearchParamsKeys } from '@/constants';
import { useSetSearchParams } from '@/hooks';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getCategories } from '@/redux/words/operations';
import { selectCategories } from '@/redux/words/selectors';

const Filters: FC = () => {
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const category = searchParams.get(SearchParamsKeys.category) ?? '';
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const isVerbCategory = category.toLowerCase() === 'verb';

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const onChangeWordInput = debounce((e: ChangeEvt) => {
    const { value, name } = e.target;

    updateSearchParams({ key: name, value: value.trim() });
  }, 1000);

  useEffect(() => {
    !isVerbCategory &&
      updateSearchParams({ key: SearchParamsKeys.isIrregular, value: '' });
  }, [isVerbCategory]);

  return (
    <Container>
      <InputsContainer>
        <InputWrap>
          <SearchField
            type='text'
            name={SearchParamsKeys.keyword}
            placeholder='Find the word'
            onChange={onChangeWordInput}
          />
          <GoSearch size={20} />
        </InputWrap>
        <FilterItem
          name={SearchParamsKeys.category}
          placeholder='Categories'
          value={category}
          filters={categories}
        />
      </InputsContainer>
      {isVerbCategory && (
        <RadioBtnContainer>
          <RadioBtnWrap>
            <RadioBtn
              name={SearchParamsKeys.isIrregular}
              type='radio'
              onChange={onChangeWordInput}
              value='false'
            />
            <RadioBtnTitle>Regular</RadioBtnTitle>
          </RadioBtnWrap>
          <RadioBtnWrap>
            <RadioBtn
              name={SearchParamsKeys.isIrregular}
              type='radio'
              onChange={onChangeWordInput}
              value='true'
            />
            <RadioBtnTitle>Irregular</RadioBtnTitle>
          </RadioBtnWrap>
        </RadioBtnContainer>
      )}
    </Container>
  );
};

export default Filters;
