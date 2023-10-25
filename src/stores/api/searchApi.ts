import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/search" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ query, page }) =>
        `/users?q=${query}&page=${page}&per_page=${10}`,
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetUsersQuery } = searchApi;
