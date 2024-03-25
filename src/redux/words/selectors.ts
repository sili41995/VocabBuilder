import { IState } from '@/types/types';

export const selectCategories = (state: IState) => state.words.categories;

export const selectWords = (state: IState) => state.words.items;
