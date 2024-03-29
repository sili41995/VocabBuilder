import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from '@/redux/initialState';
import {
  refreshUser,
  signIn,
  signOut,
  //   refreshUser,
  //   signInUser,
  //   signOutUser,
  signUp,
  //   updateUserAvatar,
} from './operations';
import { IAuthState } from '@/types/types';

const authState: IAuthState = initialState.auth;

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signOut.fulfilled, () => ({
        ...initialState.auth,
      }))
      .addCase(refreshUser.pending, (state) => ({
        ...state,
        isLoading: true,
        isRefreshing: true,
      }))
      .addMatcher(
        isAnyOf(signUp.fulfilled, signIn.fulfilled, refreshUser.fulfilled),
        (state, { payload }) => ({
          ...state,
          user: { email: payload.email, name: payload.name },
          token: payload.token,
          isLoggedIn: true,
          isLoading: false,
          isRefreshing: false,
          error: initialState.auth.error,
        })
      )
      .addMatcher(
        isAnyOf(signUp.pending, signIn.pending, signOut.pending),
        (state) => ({
          ...state,
          isLoading: true,
          error: initialState.auth.error,
        })
      )
      .addMatcher(
        isAnyOf(
          signUp.rejected,
          signIn.rejected,
          refreshUser.rejected,
          signOut.rejected
        ),
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          isRefreshing: false,
          error: payload as string,
        })
      );
  },
});

export default authSlice.reducer;
