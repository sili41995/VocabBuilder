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
