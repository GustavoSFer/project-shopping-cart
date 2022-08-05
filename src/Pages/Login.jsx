import React, { useState } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { isValidEmail, isValidPassword } from '../Utils/ValidaçãoLogin/ValidacaoLogin';
import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgErro, setMsgErro] = useState(false);
  const MIN_PASSWORD_LANGTH = 6;

  const handleClick = () => {
    if (isValidEmail(email) && isValidPassword(MIN_PASSWORD_LANGTH, password)) {
      alert('redirecionar para a proxima tela');
    }
    setMsgErro(true);
  };

  return (
    <main className="container-login container position-absolute top-50 start-50 translate-middle">
      <h1 className="txt-login">Login</h1>
      <div className="width-input-login">
        <Input
          type="text"
          name="email"
          handleChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="password"
          name="password"
          handleChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <p className="min-password text-end">
          {`Caracteres minimo para senha: ${MIN_PASSWORD_LANGTH}`}
        </p>
        <Button click={handleClick}>Entrar</Button>
        { msgErro && <p className="text-danger">E-mail ou senha incorreto!</p> }
      </div>
      <p className="txt-cadastro">
        Não possui cadastro?
        <a href="/cadastro" className="cadastrar"> Cadastrar</a>
      </p>
    </main>
  );
}

export default Login;
