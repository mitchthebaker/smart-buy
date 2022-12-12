import { createApi, fetchBaseQuery } from '@reduxjs/toolkit';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => ({
    getTimeline: builder.query({
      query: () => '/timeline'
    })
  }),
});

export const { useGetTimelineQuery } = apiSlice;