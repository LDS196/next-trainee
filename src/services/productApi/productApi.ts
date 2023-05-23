import {createApi, fetchBaseQuery,} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductType[], number>({
            query: (limit = '') => ({
                url: `/products?limit=${limit && limit}`,
                method: 'GET',
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({id}) => ({type: 'Products' as const, id})),
                        {type: 'Products', id: 'LIST'},
                    ]
                    : [{type: 'Products', id: 'LIST'}],
        }),
        addProduct: builder.mutation<any, ProductType>({
            query: (body: ProductType) => {
                return {
                    url: '/products',
                    method: 'POST',
                    body: body
                }
            },
            invalidatesTags: [{type: 'Products', id: 'LIST'}],
        }),
        deleteProduct: builder.mutation<any, number>({
            query: (id: number) => ({
                url: `/products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}],
        })
    }),


})


export const {
    useGetProductsQuery,
    useAddProductMutation, useDeleteProductMutation
} = productsApi

export type ProductType = {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

