// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { LoginArgs, User } from './types'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    credentials: 'include',
  }),
  endpoints: builder => ({
    getMe: builder.query<User, void>({
      query: () => `auth/me`,
    }),
    login: builder.mutation<LoginArgs, any>({
      query: ({ email, password }) => ({
        url: `auth/login`,
        method: 'POST',
        body: { email, password },
      }),
    }),
    signUp: builder.mutation({
      query: body => ({
        url: `auth/sign-up`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMeQuery, useLoginMutation, useSignUpMutation } = authApi
