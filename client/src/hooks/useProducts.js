import { useState, useEffect } from 'react'
import axios from 'axios'

let url = 'http://localhost:5000/api/products';

export function getAllProducts(category) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {

            if (category) {
                url = `http://localhost:5000/api/products?category=${category}`
            };

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