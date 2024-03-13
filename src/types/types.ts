import { PagePaths } from '@/constants';

export interface IUserState {
  name: null | string;
  email: null | string;
}

export interface IAuthState {
  user: IUserState;
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface IWord {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
}

export type Words = IWord[];

export interface IWordsState {
  items: Words;
  totalPages: number | null;
  page: number | null;
  perPage: number | null;
  isLoading: boolean;
  isLoaded: boolean;
  error: string | null;
}

export interface IState {
  words: IWordsState;
  auth: IAuthState;
}

export interface INewUser {
  name: string;
  email: string;
  password: string;
}

export type Credentials = Omit<INewUser, 'name'>;

export interface IAuthRes {
  email: string;
  name: string;
  token: string;
}

export interface INavLink {
  title: string;
  path: PagePaths;
}

export type NavLinks = Readonly<INavLink[]>;
