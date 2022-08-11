import React, { useContext } from 'react';
import Header from '../Components/Header';
import MyContext from '../MyContext/MyContext';
import CardProduto from '../Components/CardProduto';

function Loja() {
  const { data } = useContext(MyContext);

  return (
    <div>
      <Header />
      <section className="row row-cols-2 row-cols-lg-4 m-3 text-center">
        {
          data.length > 0
            ? data.map((item) => <CardProduto item={item} key={item.id} />)
            : <h1>Não existe produto</h1>
        }
      </section>
    </div>
  );
}

export default Loja;
