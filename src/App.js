import Routers from './Routes';
import MyContext from './MyContext/MyContext';
import { useEffect, useState } from 'react';
import RequestGetApi from './RequestApi/RequestApi';

function App() {
  const MIN_PASSWORD_LANGTH = 6
  const [query, setQuery] = useState('computador')
  const [data, setData] = useState([]);

  const api = async () => {
    setData(await RequestGetApi(query))
  }

  useEffect(() => {
    api()
  },[])

  const contextValue = {
    MIN_PASSWORD_LANGTH,
    setQuery,
    data,
  }

  return (
    <MyContext.Provider value={contextValue}>
      <div className="">
        <Routers />
      </div>
    </MyContext.Provider>
  );
}

export default App;
