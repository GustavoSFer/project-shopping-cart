import Routers from './Routes';
import MyContext from './MyContext/MyContext';

function App() {
  const MIN_PASSWORD_LANGTH = 6

  const contextValue = {
    MIN_PASSWORD_LANGTH,
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
