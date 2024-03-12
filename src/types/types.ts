export interface IAuthState {
  // user: IUserState;
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  // isLoading: boolean;
  // error: string | null;
}

export interface IState {
  // contacts: IContactsState;
  auth: IAuthState;
}

export interface INewUser {
  name: string;
  email: string;
  password: string;
}

export type Credentials = Omit<INewUser, 'name'>;
