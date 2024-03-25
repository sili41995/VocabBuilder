import wordsServiceApi from '@/service/wordsServiceApi';
import {
  Credentials,
  IAuthRes,
  ICurrentUser,
  INewUser,
  IState,
} from '@/types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUp = createAsyncThunk<
  IAuthRes,
  INewUser,
  {
    rejectValue: string;
  }
>(
  'auth/signUp',
  async (
    data: INewUser,
    { rejectWithValue }: { rejectWithValue: Function }
  ) => {
    try {
      const response = await wordsServiceApi.signUp(data);
      wordsServiceApi.token = response.token;
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const signIn = createAsyncThunk<
  IAuthRes,
  Credentials,
  { rejectValue: string }
>(
  'auth/signIn',
  async (
    credentials: Credentials,
    {
      rejectWithValue,
      signal,
    }: { rejectWithValue: Function; signal: AbortSignal }
  ) => {
    try {
      const response = await wordsServiceApi.signIn(credentials, signal);
      wordsServiceApi.token = response.token;
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const refreshUser = createAsyncThunk<
  ICurrentUser,
  undefined,
  { rejectValue: string }
>(
  'auth/refresh',
  async (
    _,
    {
      rejectWithValue,
      getState,
    }: { rejectWithValue: Function; getState: Function }
  ) => {
    const state = getState() as IState;
    const { token } = state.auth;
    try {
      wordsServiceApi.token = token;
      const response = await wordsServiceApi.refreshUser();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
