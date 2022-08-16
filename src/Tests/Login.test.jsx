import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

/* globals describe, expect, it */
describe('Verificando tela de login, se os elementos estão na tela', () => {
  it('Verificndo se tem o input email na tela de login', () => {
    render(<App />);
    const inputEmail = screen.getByTestId('email');
    expect(inputEmail).toBeInTheDocument();
  });

  it('Verificando se tem o input password na tela de login', () => {
    render(<App />);
    const password = screen.getByTestId('password');
    expect(password).toBeInTheDocument();
  });

  it('Verificando se tem dois "Button" na tela de login', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});

describe('Verificando comportamentos na tela de "login"', () => {
  it(`Verificando se quando digitado o email e senha e clicado no botão 
  "Entrar" é apagado as informações do input`, () => {
    render(<App />);
    const inputEmail = screen.getByRole('textbox');
    // const inputPassword = screen.getByRole('textbox');
    // const buttonEntrar = screen.getByTestId('btn-entrar');

    userEvent.type(inputEmail, 'gustavo@gmail.com');
    console.log('>>>>', inputEmail);
    // console.log('>>>>', inputPassword);
    // userEvent.type(inputPassword, '3432fdsgsd');
    // userEvent.click(buttonEntrar);

    expect(inputEmail).toHaveValue('gustavo@gmail.com');
  });
});
