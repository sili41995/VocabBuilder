import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from '@/redux/initialState';
import {
  refreshUser,
  signIn,
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

      // .addCase(signInUser.fulfilled, (state, { payload }) => ({
      //   ...state,
      //   isLoading: false,
      //   user: { ...payload.user },
      //   token: payload.token,
      //   isLoggedIn: true,
      // }))
      // .addCase(signOutUser.fulfilled, (state) => ({
      //   ...initialState.auth,
      //   user: {
      //     ...state.user,
      //     email: initialState.auth.user.email,
      //   },
      // }))
      .addCase(refreshUser.pending, (state) => ({
        ...state,
        isLoading: true,
        isRefreshing: true,
      }))
      // .addCase(refreshUser.fulfilled, (state, { payload }) => ({
      //   ...state,
      //   isLoading: false,
      //   user: {
      //     name: payload.name,
      //     email: payload.email,
      //     avatar: payload.avatar,
      //   },
      //   isLoggedIn: true,
      //   isRefreshing: false,
      // }))
      // .addCase(updateUserAvatar.fulfilled, (state, { payload }) => ({
      //   ...state,
      //   user: {
      //     ...state.user,
      //     avatar: payload.avatar as string,
      //   },
      // }))
      // .addCase(refreshUser.rejected, (state) => ({
      //   ...state,
      //   isLoading: false,
      //   isRefreshing: false,
      // }))

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
        isAnyOf(
          signUp.pending,
          signIn.pending
          // signOutUser.pending,
          // updateUserAvatar.pending
        ),
        (state) => ({
          ...state,
          isLoading: true,
          error: initialState.auth.error,
        })
      )
      .addMatcher(
        isAnyOf(signUp.rejected, signIn.rejected, refreshUser.rejected),
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
