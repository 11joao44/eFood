import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../types'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Restaurante[], string>({
      query: (id) => `${id}`
    })
  })
})

export const { useGetRestaurantQuery } = api

export default api
