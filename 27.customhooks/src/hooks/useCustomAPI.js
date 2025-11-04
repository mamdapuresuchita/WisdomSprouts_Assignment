import React, { useEffect, useState } from "react";
import axios from "axios";

const useCustomAPI = (initialURL) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(initialURL);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false); //error mila to loading false
    }
  }

  useEffect(() => {
    fetchData();
  }, [initialURL]);

  return { products, loading, error };
};

export default useCustomAPI;
