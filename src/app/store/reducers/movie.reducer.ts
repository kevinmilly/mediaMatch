import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Movie } from '../movie.model';
import * as MovieActions from '../actions/movie.actions';

export const moviesFeatureKey = 'movies';

export interface State extends EntityState<Movie> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(MovieActions.addMovie,
    (state, action) => adapter.addOne(action.movie, state)
  ),
  on(MovieActions.upsertMovie,
    (state, action) => adapter.upsertOne(action.movie, state)
  ),
  on(MovieActions.addMovies,
    (state, action) => adapter.addMany(action.movies, state)
  ),
  on(MovieActions.upsertMovies,
    (state, action) => adapter.upsertMany(action.movies, state)
  ),
  on(MovieActions.updateMovie,
    (state, action) => adapter.updateOne(action.movie, state)
  ),
  on(MovieActions.updateMovies,
    (state, action) => adapter.updateMany(action.movies, state)
  ),
  on(MovieActions.deleteMovie,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(MovieActions.deleteMovies,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(MovieActions.loadMovies,
    (state, action) => adapter.setAll(action.movies, state)
  ),
  on(MovieActions.clearMovies,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
