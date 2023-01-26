import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const serviceAPIs = createApi({
  reducerPath: 'serviceAPIs',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes:['Post'],
  endpoints: (builder) => ({
    getPostData: builder.query({
      query: (name) => 'posts',
      providesTags:['Post']
    }),

    addPostData:builder.mutation({
      query:(data)=>({
        url:'posts',
        method:'POST',
        body:data
      }),
      invalidatesTags:['Post'],
    
    }),
    updatePostData:builder.mutation({
      query:(data)=>({
        url:`posts/${data.id}`,
        method:'PUT',
        body:data
      
      }),
      invalidatesTags:['Post']
    }),

    deletePostData:builder.mutation({
      query:(id)=>({
        url:`posts/${id}`,
        method:'DELETE'
      }),
      invalidatesTags:['Post']
    })
  }),
})

export const {useGetPostDataQuery,useAddPostDataMutation, useUpdatePostDataMutation,useDeletePostDataMutation}=serviceAPIs;