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
    <div className='product-container'>
      <div className='filter-container'>
        <label htmlFor="filter">Product name Filter: </label>
        <input
          type="text"
          id="filter"
          placeholder='Enter Product'
          value={filter}
          className='input_text'
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className='product-list'>
        {filteredProducts.map((item, index) => (
          <div className='product-card' key={index} >
            <h4>{item.product_name}</h4>
            <h5>{item.price}</h5>
            <h5>{item.desc}</h5>
            <button onClick={() => handleDelete(item.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
