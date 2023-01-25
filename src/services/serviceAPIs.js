import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const serviceAPIs = createApi({
  reducerPath: 'serviceAPIs',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPostData: builder.query({
      query: (name) => 'posts',
    }),
  }),
})

export const {useGetPostDataQuery}=serviceAPIs;