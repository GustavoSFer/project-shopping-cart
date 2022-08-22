import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter/renderWithRouter';
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
  it(`Verificando se quando digitado o email e senha 
  realmente aparece o que foi escrito`, () => {
    render(<App />);
    const inputEmail = screen.getByTestId('email');
    const inputPassword = screen.getByTestId('password');

    userEvent.type(inputEmail, 'gustavo@gmail.com');
    userEvent.type(inputPassword, '3432fdsgsd');
    // Verificando se o valor esta correto.
    expect(inputEmail).toHaveValue('gustavo@gmail.com');
    expect(inputPassword).toHaveValue('3432fdsgsd');
  });
});

describe('Redirecionamento de pagina', () => {
  it('Verificando se quando clica em "Entrar" é redirecionado para /loja', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId('email');
    const inputPassword = screen.getByTestId('password');
    const btnEntrar = screen.getByTestId('btn-entrar');

    userEvent.type(inputEmail, 'gustavo@gmail.com');
    userEvent.type(inputPassword, '3432fdsgsd');
    userEvent.click(btnEntrar);

    const loading = screen.getByRole('heading', { level: 1 });
    expect(loading).toBeInTheDocument();
  });
});
