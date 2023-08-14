import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const searchApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/search' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({query}) => `/users?q=${query}`,
    }),
  }),
})

export const { useGetUsersQuery } = searchApi;
