import React from 'react';
import { screen, render } from '@testing-library/react';
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
