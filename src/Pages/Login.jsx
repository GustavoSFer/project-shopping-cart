import React from 'react';
import Input from '../Components/Input';
import '../App.css';
import Button from '../Components/Button';

function Login() {
  const handleClick = () => {
    console.log('Botão de entrar foi clicado');
  };

  return (
    <main className="container-login container position-absolute top-50 start-50 translate-middle">
      <h1 className="txt-login">Login</h1>
      <div className="width-input-login">
        <Input type="text" name="email" />
        <Input type="password" name="password" />
        <Button click={handleClick}>Entrar</Button>
      </div>
      <p className="txt-cadastro">
        Não possui cadastro?
        <a href="/cadastro" className="cadastrar"> Cadastrar</a>
      </p>
    </main>
  );
}

export default Login;
