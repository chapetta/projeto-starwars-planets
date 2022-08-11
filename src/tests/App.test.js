import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

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
  test('testa se for digitado "too" no campo de texto, o planeta "Tatooine" é exibido', () => {
    render(<App />);

    const input = screen.getByTestId('name-filter')
    const itemTable = document.getElementsByTagName('tr')
    userEvent.type(input, 'too')
    expect(itemTable).toHaveLength(1);
  })
  it('testa se os selects e suas opções estao na tela', ()=> {
    render(<App />)

    const selectColumn = screen.getByTestId('column-filter')
    const selectOperator = screen.getByTestId('comparison-filter')
    const value = screen.getByTestId('value-filter')
    
    expect(selectColumn).toBeInTheDocument();
    expect(selectOperator).toBeInTheDocument();
    expect(value).toBeInTheDocument();

    expect(selectColumn[0]).toHaveTextContent(/population/i);
    expect(selectColumn[1]).toHaveTextContent(/orbital_period/i);
    expect(selectColumn[2]).toHaveTextContent(/diameter/i);
    expect(selectColumn[3]).toHaveTextContent(/rotation_period/i);
    expect(selectColumn[4]).toHaveTextContent(/surface_water/i);
    expect(selectOperator[0]).toHaveTextContent(/maior que/i);
    expect(selectOperator[1]).toHaveTextContent(/menor que/i);
    expect(selectOperator[2]).toHaveTextContent(/igual a/i);
   
})
test('testa se existe um botao de filtrar na tela', () => {
  render(<App />);

  const filterButton = screen.getByTestId('button-filter')
  
  expect(filterButton).toBeInTheDocument();
})
test('testa o botão de filtrar sem alterar os valores iniciais dos inputs ', () => {
  render(<App />);
  
  const selectColumn = screen.getAllByTestId('column-filter')
  const selectOperator = screen.getAllByTestId('comparison-filter')
  const value = screen.getByTestId('value-filter')
  const filterButton = screen.getByTestId('button-filter')
  const itemTable = document.getElementsByTagName('tr')

  expect(selectColumn[0]).toHaveTextContent(/population/i);
  expect(selectOperator[0]).toHaveTextContent(/maior que/i);
  expect(value).toHaveValue(0);
  userEvent.click(filterButton);
  expect(itemTable).toHaveLength(1);
  
})

test('testa o filtro maior que', () => {
  render(<App />);

  const selectColumn = screen.getByTestId('column-filter')
  const selectOperator = screen.getByTestId('comparison-filter')
  const value = screen.getByTestId('value-filter')
  const filterButton = screen.getByTestId('button-filter')
  const itemTable = document.getElementsByTagName('tr')
  
  userEvent.selectOptions(selectColumn, 'diameter');
  userEvent.selectOptions(selectOperator, 'maior que');
  userEvent.type(value, '10000')
  userEvent.click(filterButton)

  expect(itemTable).toHaveLength(1);
})
test('testa o filtro menor que', () => {
  render(<App />);

  const selectColumn = screen.getByTestId('column-filter')
  const selectOperator = screen.getByTestId('comparison-filter')
  const value = screen.getByTestId('value-filter')
  const filterButton = screen.getByTestId('button-filter')
  const itemTable = document.getElementsByTagName('tr')
  
  userEvent.selectOptions(selectColumn, 'rotation_period');
  userEvent.selectOptions(selectOperator, 'menor que');
  userEvent.type(value, '23')
  userEvent.click(filterButton)

  expect(itemTable).toHaveLength(1);
})

test('testa o filtro igual a', () => {
  render(<App />);

  const selectColumn = screen.getByTestId('column-filter')
  const selectOperator = screen.getByTestId('comparison-filter')
  const value = screen.getByTestId('value-filter')
  const filterButton = screen.getByTestId('button-filter')
  const itemTable = document.getElementsByTagName('tr')
  
  userEvent.selectOptions(selectColumn, 'surface_water');
  userEvent.selectOptions(selectOperator, 'igual a');
  userEvent.type(value, '8')
  userEvent.click(filterButton)

  expect(itemTable).toHaveLength(1);
})


})

