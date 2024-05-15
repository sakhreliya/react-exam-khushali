import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS } from '../Reduc-saga/Product/action/action';
import './Product.css'; 

function Product() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.ProductReducer.Product);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PROGRESS });
  }, []);

  const handleDelete = (id) => {
    dispatch({ type: DELETE_PRODUCT_PROGRESS, id });
  };

  const filteredProducts = products.filter(item =>
    item.product_name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    
  <div className='container product-container'>
  <div className='filter-container'>
    <div>
      <label htmlFor="filter">Product name Filter:</label>
      <input
        type="text"
        id="filter"
        placeholder='Enter Product'
        value={filter}
        className='form-control input_text'
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  </div>
  <table className='table table-striped'>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Price</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {filteredProducts.map((product, index) => (
        <tr key={index}>
          <td>{product.product_name}</td>
          <td>{product.price}</td>
          <td>{product.desc}</td>
          <td>
            <button className='btn btn-primary' onClick={() => handleDelete(product.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}

export default Product;
