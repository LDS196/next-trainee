import {useAddProductMutation, useDeleteProductMutation, useGetProductsQuery,} from "@/services/productApi/productApi";


const Products = () => {
    const {data} = useGetProductsQuery(5)
    const [addProduct,] = useAddProductMutation()
    const [deleteProduct,{isLoading,error,isError}]=useDeleteProductMutation()
    console.log(error)
const handelDeleteProduct=async ()=>{
    await deleteProduct('dfdfd')
}
    const handelAddProduct = async () => {
        await addProduct(
            {id: 1,
            title: 'string',
            price: 'string',
            category: 'string',
            description: 'string',
            image: 'string'})
    }
    return (
        <>
        {
            isLoading?(<h2>Loading</h2>)
            :   (<>
                <button onClick={handelAddProduct}>Add product</button>
                <button onClick={handelDeleteProduct}>Delete product</button>
                <ul>
                    {data?.length && data.map(el => <li key={el.id}>{el.title}</li>)}
                </ul>
                <h3>{isError?'error':'no error'}</h3>
            </>)
        }
        </>
    );
};

export default Products;