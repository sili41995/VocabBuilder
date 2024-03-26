import wordsServiceApi from '@/service/wordsServiceApi';
import { Filters, IWord, IWordsInfo, NewWord } from '@/types/types';
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

export const fetchAllWords = createAsyncThunk<
  IWordsInfo,
  number,
  {
    rejectValue: string;
  }
>(
  'words/getAllWords',
  async (
    page,
    {
      rejectWithValue,
      signal,
    }: { rejectWithValue: Function; signal: AbortSignal }
  ) => {
    try {
      const response = await wordsServiceApi.fetchAllWords({ signal, page });
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

export const addToDictionary = createAsyncThunk<
  IWord,
  string,
  {
    rejectValue: string;
  }
>(
  'words/addToDictionary',
  async (id, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const response = await wordsServiceApi.addToDictionary(id);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
