import axios from "axios";
import { useEffect, useState } from "react";

// Custom hook to fetch data base on id from API

const useOneFigure = (figure) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchFigure = async () => {
      try {
        const response = await axios.get(
          `https://desolate-bayou-57725.herokuapp.com/api/products/${figure}`
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchFigure();
  }, [figure]);
  return { data, error };
};

export default useOneFigure;
