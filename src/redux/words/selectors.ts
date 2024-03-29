import { IState } from '@/types/types';

export const selectCategories = (state: IState) => state.words.categories;

export const selectWords = (state: IState) => state.words.items;

export const selectPage = (state: IState) => state.words.page;

export const selectPerPage = (state: IState) => state.words.perPage;

export const selectTotalPages = (state: IState) => state.words.totalPages;

export const selectStatistics = (state: IState) => state.words.statistics;
