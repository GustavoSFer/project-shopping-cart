import Routers from './Routes';
import MyContext from './MyContext/MyContext';
import { useEffect, useState } from 'react';
import RequestGetApi from './RequestApi/RequestApi';

function App() {
  const MIN_PASSWORD_LANGTH = 6
  const [data, setData] = useState([]);

  const api = async () => {
    setData(await RequestGetApi('computador'))
  }

  const optionFilter = (filter) => {
    console.log(filter);
    if (filter === 'menor') {
      const option = [...data].sort((a, b) => a.price - b.price);
      console.log(option);
      setData(option);
    } else {
      const option = [...data].sort((a, b) => b.price - a.price);
      setData(option);
    }
  }

  useEffect(() => {
    api()
  },[])

  const contextValue = {
    MIN_PASSWORD_LANGTH,
    data,
    setData,
    optionFilter,
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
