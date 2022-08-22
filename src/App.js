import Routes from './Routes';
import MyContext from './MyContext/MyContext';
import { useEffect, useState } from 'react';
import { RequestGetApi } from './RequestApi/RequestApi';
import { HashRouter } from 'react-router-dom';

function App() {
  const MIN_PASSWORD_LANGTH = 6;
  const [data, setData] = useState([]);
  const [txtSearch, setTxtSearch] = useState('');
  const [carrinho, setCarrinho] = useState([]);
  const [ativarCarrinho, setAtivarCarrinho] = useState(false);
  const [loading, setLoading] = useState(false);


  const api = async (query = 'computador') => {
    setLoading(true);
    setData(await RequestGetApi(query));
    setLoading(false);
  };

  const optionFilter = (filter) => {
    if (filter === 'menor') {
      const option = [...data].sort((a, b) => a.price - b.price);
      console.log(option);
      setData(option);
    } else {
      const option = [...data].sort((a, b) => b.price - a.price);
      setData(option);
    }
  };

  const filterValue = async (filtro) => {
    if (txtSearch === '') setTxtSearch('computador')
    const result = await RequestGetApi(txtSearch);
    const whichFilter = filtro.split('-');
    const value = [...result]
      .filter((item) => item.price >= whichFilter[0] && item.price <= whichFilter[1]);

    setData(value)
  };

  useEffect(() => {
    api()
  },[]);

  const contextValue = {
    MIN_PASSWORD_LANGTH,
    data, setData,
    optionFilter,
    filterValue,
    txtSearch, setTxtSearch,
    carrinho, setCarrinho,
    ativarCarrinho, setAtivarCarrinho,
    loading,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <div className="color-app">
        <HashRouter>
          <Routes />
        </HashRouter>
      </div>
    </MyContext.Provider>
  );
}

export default App;
