// Source: https://medium.com/swlh/write-a-custom-reusable-hook-usefetch-1443d8d4e1e1
import { useState, useEffect, useDebugValue } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setData(result);
      })
      .catch(error => {
        console.error(error);
      });
  }, [url]);

  useDebugValue(data ?? 'Loading data...');

  return data;
};

export default useFetch;
