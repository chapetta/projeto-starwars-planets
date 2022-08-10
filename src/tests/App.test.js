import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('testando a pagina funcionando', () => {
  test('Testa se existe o texto principal do projeto na tela', () => {
    render(<App />);

    const headText = screen.getByRole('heading', {name: /projeto Star Wars/i})
    expect(headText).toBeInTheDocument();
  })

  test('testa se há um input para pesquisa de nome na tela', () => {
    render(<App />);

    const input = screen.getByTestId('name-filter')
    expect(input).toBeInTheDocument();
  })
})