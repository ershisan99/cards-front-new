import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { authApi } from '../services/auth/auth'
import { decksApi } from '../services/decks/decks'

export const store = configureStore({
  reducer: { [authApi.reducerPath]: authApi.reducer, [decksApi.reducerPath]: decksApi.reducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware).concat(decksApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
