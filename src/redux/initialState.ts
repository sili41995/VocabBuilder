import { IState } from '@/types/types';

const initialState: IState = {
  words: {
    items: [],
    categories: [],
    tasks: [],
    totalPages: null,
    page: null,
    perPage: null,
    isLoading: false,
    isLoaded: false,
    error: null,
    statistics: null,
  },
  auth: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
};

export default initialState;
