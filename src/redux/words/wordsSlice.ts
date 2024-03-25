import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from '@/redux/initialState';
// import {} from './operations';
// import { signOutUser } from 'redux/auth/operations';
import { IWordsState } from '@/types/types';
import { fetchCategories } from './operations';

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
      .addMatcher(isAnyOf(fetchCategories.pending), (state) => ({
        ...state,
        isLoading: true,
      }))
      .addMatcher(isAnyOf(fetchCategories.rejected), (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload as string,
      }));
  },
});

export default contactsSlice.reducer;
