import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from '@/redux/initialState';
import { IWordsState } from '@/types/types';
import { createNewWord, fetchAllWords, fetchCategories } from './operations';

const contactsState: IWordsState = initialState.words;

const contactsSlice = createSlice({
  name: 'words',
  initialState: contactsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, { payload }) => ({
        ...state,
        categories: payload,
        isLoading: false,
        error: initialState.words.error,
      }))
      .addCase(fetchAllWords.fulfilled, (state, { payload }) => ({
        ...state,
        items: payload.results,
        isLoading: false,
        error: initialState.words.error,
        page: payload.page,
        perPage: payload.perPage,
        totalPages: payload.totalPages,
      }))
      .addCase(createNewWord.fulfilled, (state, { payload }) => ({
        ...state,
        items: [...state.items, payload],
        isLoading: false,
        error: initialState.words.error,
      }))
      .addMatcher(
        isAnyOf(
          fetchCategories.pending,
          fetchAllWords.pending,
          createNewWord.pending
        ),
        (state) => ({
          ...state,
          isLoading: true,
        })
      )
      .addMatcher(
        isAnyOf(
          fetchCategories.rejected,
          fetchAllWords.rejected,
          createNewWord.rejected
        ),
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          error: payload as string,
        })
      );
  },
});

export default contactsSlice.reducer;
