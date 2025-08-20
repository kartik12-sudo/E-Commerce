import React, { useEffect, useState } from 'react';
import ProductList from '../common/ProductList';
import { getProducts } from '../../service/ApiService';

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Shop Products</h2>
      <ProductList products={products} />
    </div>
  );
};

export default ShopPage;
