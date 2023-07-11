import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { authApi } from '../services/auth/auth'

export const store = configureStore({
  reducer: { [authApi.reducerPath]: authApi.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
