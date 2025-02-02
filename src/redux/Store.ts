import { configureStore } from '@reduxjs/toolkit';
import { MoviesService } from '../services/movies/MoviesServices';


export const store = configureStore({
  reducer: {
    [MoviesService.reducerPath]: MoviesService.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(MoviesService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
