import initialState from '@/redux/initialState';
import { Credentials, IAuthRes, INewUser } from '@/types/types';

class WordsServiceApi {
  private BASE_URL = 'https://vocab-builder-backend.p.goit.global/api';
  private TOKEN = initialState.auth.token;

  get token() {
    return this.TOKEN;
  }

  set token(newToken) {
    this.TOKEN = newToken;
  }

  signUp(data: INewUser): Promise<IAuthRes> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/users/signup`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  signIn(data: Credentials, signal: AbortSignal): Promise<IAuthRes> {
    const options = {
      signal,
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/users/signin`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }
}

const wordsServiceApi = new WordsServiceApi();

export default wordsServiceApi;
