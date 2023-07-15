import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { isEmpty } from 'remeda'

import { Paginated } from '../common/types'

import { Card, CreateCardInput, DeleteCardInput, GetCardsParams } from './types'

// Define a service using a base URL and expected endpoints
export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL, credentials: 'include' }),
  tagTypes: ['Cards'],
  endpoints: builder => ({
    getCards: builder.query<Paginated<Card>, GetCardsParams>({
      query: ({ deckId, ...params }) => {
        return {
          url: `decks/${deckId}/cards`,
          params: isEmpty(params) ? undefined : params,
        }
      },
      providesTags: ['Cards'],
    }),
    createCard: builder.mutation<any, CreateCardInput>({
      query: ({ deckId, ...body }) => ({
        url: `decks/${deckId}/cards`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cards'],
    }),
    deleteCard: builder.mutation<any, DeleteCardInput>({
      query: ({ cardId }) => ({
        url: `cards/${cardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCardsQuery, useDeleteCardMutation, useCreateCardMutation } = cardsApi
