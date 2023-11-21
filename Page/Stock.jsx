import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Stock(props) {
  const apiKey = "1518baee78a0123210c58f51508c6a96";
  const params = useParams();
  const symbol = params.symbol;
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;
  const [Stock, setStock] = useState(null);

  const getStock = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStock(data);
    } catch (e) {
      console.error(e);
    }
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getStock();
  }, []);

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return Stock
    ? Stock.map((oneStock, index) => (
        <div key={index}>
          <h1>Name:{oneStock.name}</h1>
          <h2>Price:{oneStock.price}</h2>
          <h3>Change:{oneStock.change}%</h3>
        </div>
      ))
    : loading();
}

export default Stock;