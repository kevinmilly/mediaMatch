import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromMovie from './reducers/movie.reducer';



export interface State {

  [fromMovie.moviesFeatureKey]: fromMovie.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromMovie.moviesFeatureKey]: fromMovie.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
