import wordsServiceApi from '@/service/wordsServiceApi';
import { Filters, IWord, NewWord } from '@/types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk<
  Filters,
  undefined,
  {
    rejectValue: string;
  }
>(
  'words/getCategories',
  async (_, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const response = await wordsServiceApi.fetchCategories();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const createNewWord = createAsyncThunk<
  IWord,
  NewWord,
  {
    rejectValue: string;
  }
>(
  'words/createNewWord',
  async (data, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const response = await wordsServiceApi.createNewWord(data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
