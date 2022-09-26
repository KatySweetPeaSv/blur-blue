import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook to fetch data from API

const useFigures = () => {
  const [figures, setFigures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://desolate-bayou-57725.herokuapp.com/api/products"
        );
        setFigures(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return { figures, loading };
};

export default useFigures;
