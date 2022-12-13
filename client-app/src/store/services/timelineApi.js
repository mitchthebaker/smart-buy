import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const timelineApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
  endpoints: builder => ({
    getTimeline: builder.query({
      query: () => '/timeline'
    })
  }),
});

export const { useGetTimelineQuery } = timelineApi;