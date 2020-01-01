import {
  init,
  RematchDispatch,
  RematchRootState,
  RematchStore,
} from '@rematch/core';
import models, { RootModel } from './models';

export let store: Store;

export type Store = RematchStore<RootModel>;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

export const initializeStore = (initialState?: RootState): Store =>
  (store = init({
    models,
    redux: {
      initialState,
    },
  }));
