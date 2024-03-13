import { createSlice } from '@reduxjs/toolkit';
import initialState from '@/redux/initialState';
// import {} from './operations';
// import { signOutUser } from 'redux/auth/operations';
import { IWordsState } from '@/types/types';

const contactsState: IWordsState = initialState.words;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {},
});

export default contactsSlice.reducer;
