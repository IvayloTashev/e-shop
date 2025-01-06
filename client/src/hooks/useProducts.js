import { useState, useEffect } from 'react'
import axios from 'axios'
import { publicRequest, userRequest } from '../constants/requestMethods'

export function getAllProducts(category) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            let url = '';

            if (category) {
                url = `http://localhost:5000/api/products?category=${category}`
            } else {
                url = `http://localhost:5000/api/products`
            }

            try {
                const { data } = await axios.get(url);
                setProducts(data);

            } catch (err) {
                console.error('Error fetching products:', err);
            }

        })();
    }, [category]);

    return [products];
}

export function getOneProduct(id) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {

            try {
                const { data } = await publicRequest.get(`products/find/${id}`);
                setProduct(data);

            } catch (err) {
                console.error('Error fetching product:', err);
            }

        })();
    }, [id]);

    return [product];
}