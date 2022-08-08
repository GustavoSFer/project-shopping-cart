import React, { useContext } from 'react';
import Header from '../Components/Header';
import MyContext from '../MyContext/MyContext';
import CardProduto from '../Components/CardProduto';

function Loja() {
  const { data } = useContext(MyContext);

  return (
    <main>
      <Header />
      <div className="row row-cols-2 row-cols-lg-4 m-3 text-center">
        {
          data && data.map((item) => <CardProduto item={item} key={item.id} />)
        }
      </div>
    </main>
  );
}

export default Loja;
