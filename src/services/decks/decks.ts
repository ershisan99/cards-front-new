import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Paginated } from '../common/types'

import { CreateDeckInput, Deck, GetDecksParams } from './types'

// Define a service using a base URL and expected endpoints
export const decksApi = createApi({
  reducerPath: 'decksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/v1/', credentials: 'include' }),
  tagTypes: ['Decks'],
  endpoints: builder => ({
    getDecks: builder.query<Paginated<Deck> & { maxCardsCount: number }, GetDecksParams>({
      query: params => {
        return {
          url: `decks`,
          params: params ?? undefined,
        }
      },
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<any, CreateDeckInput>({
      query: body => ({
        url: `decks`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Decks'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDecksQuery, useCreateDeckMutation } = decksApi
