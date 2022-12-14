const RequestGetApi = async (query) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const request = await fetch(URL);
  const result = await request.json();
  return result.results;
};

const RequestUnicoProduto = async (query) => {
  const URL = `https://api.mercadolibre.com/items/${query}`;
  const request = await fetch(URL);
  const result = await request.json();
  return result;
};

export {
  RequestGetApi,
  RequestUnicoProduto,
};
