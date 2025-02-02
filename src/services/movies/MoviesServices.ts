import { createApi, EndpointBuilder } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../axios/axiosInstance';
export const MoviesService = createApi({
    baseQuery: axiosBaseQuery(),
    reducerPath: 'Movies',
    tagTypes: ['Movie'],
    refetchOnReconnect: true,
    keepUnusedDataFor: 10,
    endpoints: (builder: EndpointBuilder<any, any, any>) => ({
        getMovieAll: builder.query<any, { page?: number; search?: string; limit?: number }>({
            query: ({ page = 1, search = '' }: { page?: number; search?: string; limit?: number }) => {
                const queryParams = new URLSearchParams();
                queryParams.append('api_key', 'd3a32bbe050cb1f85f40e56da3ff7e07');
                queryParams.append('language', 'en-US');
                queryParams.append('page', page.toString());

                if (search) {
                    queryParams.append('query', search); 
                    return {
                        url: `search/movie?${queryParams.toString()}`,
                        method: 'GET',
                    };
                }

                return {
                    url: `movie/popular?${queryParams.toString()}`,
                    method: 'GET',
                };
            },
            providesTags: ['Movie'],
        }),

        getMovieById: builder.query<any, { id: string }>({
            query: ({ id }: { id: string }) => ({
                url: `movie/${id}?api_key=d3a32bbe050cb1f85f40e56da3ff7e07&language=en-US`,
                method: 'GET',
            }),
            providesTags: ['Movie'],
            async onQueryStarted(_args, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                } catch (error: any) {
                    console.error('Error fetching movie details', error);
                }
            },
        }),
    }),
});

export const {
    useGetMovieAllQuery,
    useGetMovieByIdQuery,
} = MoviesService;
