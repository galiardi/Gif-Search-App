export const getGifs = async (category) => {
  const limit = 10;
  const rating = 'g';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=0AD8zNCBB6tkShbsu7PZMxArwbVoHPf1&rating=${rating}&limit=${limit}&q=${category}`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));
  return gifs;
};
