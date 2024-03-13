import wordsServiceApi from '@/service/wordsServiceApi';
import { Credentials, IAuthRes, INewUser } from '@/types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUp = createAsyncThunk<
  IAuthRes,
  INewUser,
  {
    rejectValue: string;
  }
>(
  'auth/signUpUser',
  async (
    data: INewUser,
    { rejectWithValue }: { rejectWithValue: Function }
  ) => {
    try {
      const response = await wordsServiceApi.signUp(data);
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
  'auth/signInUser',
  async (
    credentials: Credentials,
    {
      rejectWithValue,
      signal,
    }: { rejectWithValue: Function; signal: AbortSignal }
  ) => {
    try {
      const response = await wordsServiceApi.signIn(credentials, signal);
      if (response instanceof Error) {
        throw new Error('Wrong username or password');
      }
      wordsServiceApi.token = response.token;
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
