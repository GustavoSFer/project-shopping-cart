import React, { useContext } from 'react';
import Header from '../Components/Header';
import MyContext from '../MyContext/MyContext';
import CardProduto from '../Components/CardProduto';

function Loja() {
  const { data, loading } = useContext(MyContext);

  return (
    <div>
      <Header />
      { loading && <h1>Loading ...</h1>}
      <section className="row row-cols-2 m-5 section-loja">
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
