import { getGifs } from '../helpers';

import { useState, useEffect } from 'react';

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {

    (async () => {
      const data = await getGifs(category);
      setGifs(data);
      setisLoading(false);
    })();
  }, [category]);

  return {
    gifs,
    isLoading,
  };
};
