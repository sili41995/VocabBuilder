import initialState from '@/redux/initialState';
import {
  Credentials,
  Filters,
  IAuthRes,
  ICurrentUser,
  IDeleteWord,
  IFetchAllWordsProps,
  IGetWordsProps,
  INewUser,
  ISignOut,
  IStatistics,
  ITasks,
  IUpdateWord,
  IWord,
  IWordsInfo,
  NewWord,
} from '@/types/types';

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

  signOut(): Promise<ISignOut> {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/users/signout`, options)
      .then((response) => response.json())
      .then((data) => {
        const isError = data.message !== 'Sign out success';
        if (isError) {
          throw Error(data.message);
        }

        return data;
      });
  }

  refreshUser(): Promise<ICurrentUser> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/users/current`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  fetchCategories(): Promise<Filters> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/words/categories`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }

        return data;
      });
  }

  fetchAllWords({ signal, page }: IFetchAllWordsProps): Promise<IWordsInfo> {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/words/all?page=${page}`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }

        return data;
      });
  }

  fetchOwnWords({
    signal,
    page,
    keyword,
    category,
    isIrregular,
  }: IGetWordsProps): Promise<IWordsInfo> {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(
      `${this.BASE_URL}/words/own?page=${page}&keyword=${keyword}&category=${category}&isIrregular=${isIrregular}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }

        return data;
      });
  }

  createNewWord(data: NewWord): Promise<IWord> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/words/create`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }

        return data;
      });
  }

  addToDictionary(id: string): Promise<IWord> {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/words/add/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }

        return data;
      });
  }

  deleteWord(id: string): Promise<IDeleteWord> {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/words/delete/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        if (!data.id) {
          throw Error(data.message);
        }

        return data;
      });
  }

  updateWord({ data, id }: IUpdateWord): Promise<Filters> {
    const options = {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/words/edit/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  fetchStatistics(): Promise<IStatistics> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/words/statistics`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  fetchTasks(): Promise<ITasks> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/words/tasks`, options)
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
