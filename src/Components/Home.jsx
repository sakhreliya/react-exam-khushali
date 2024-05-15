import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCT_PROGRESS } from '../Reduc-saga/Product/action/action';
import { Link } from 'react-router-dom';
import "./Home.css";


function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ProductReducer.Product);

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PROGRESS });
  }, []);

  const displayedData = data ? data.slice(0, 5) : [];


  return (
    <div className='container'>
    <div className='d-flex flex-wrap'>
      {displayedData.map((item, index) => (
        <div className='card' key={index}>
          <h4>{item.product_name}</h4>
          <h5>{item.price}</h5>
          <h5>{item.desc}</h5>
        </div>
      ))}
    </div>
    <div className='link-container'>
      <Link to="/product">See More ..</Link>
    </div>
  </div>
  );
}

export default Home;
