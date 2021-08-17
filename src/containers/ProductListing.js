import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';

const ProductListing = () => {

    //use Selector to pull the list of product by state
    const products = useSelector((state) => state);
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const res = await axios.get("https://fakestoreapi.com/products/")
            .catch((err) => {
                console.log("Err", err);
            })
        dispatch(setProducts(res.data)); //pass product list to setProducts Actions
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    console.log(products);

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing
