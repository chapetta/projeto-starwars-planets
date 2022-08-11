import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const mockFetch = () => {
  const info = {
    "count": 60,
    "next": "https://swapi-trybe.herokuapp.com/api/planets/?page=2",
    "previous": null,
    "results": [
        {
            "name": "Tatooine",
            "rotation_period": "23",
            "orbital_period": "304",
            "diameter": "10465",
            "climate": "arid",
            "gravity": "1 standard",
            "terrain": "desert",
            "surface_water": "1",
            "population": "200000",
            "residents": [
                "https://swapi-trybe.herokuapp.com/api/people/1/",
                "https://swapi-trybe.herokuapp.com/api/people/2/",
                "https://swapi-trybe.herokuapp.com/api/people/4/",
                "https://swapi-trybe.herokuapp.com/api/people/6/",
                "https://swapi-trybe.herokuapp.com/api/people/7/",
                "https://swapi-trybe.herokuapp.com/api/people/8/",
                "https://swapi-trybe.herokuapp.com/api/people/9/",
                "https://swapi-trybe.herokuapp.com/api/people/11/",
                "https://swapi-trybe.herokuapp.com/api/people/43/",
                "https://swapi-trybe.herokuapp.com/api/people/62/"
            ],
            "films": [
                "https://swapi-trybe.herokuapp.com/api/films/1/",
                "https://swapi-trybe.herokuapp.com/api/films/3/",
                "https://swapi-trybe.herokuapp.com/api/films/4/",
                "https://swapi-trybe.herokuapp.com/api/films/5/",
                "https://swapi-trybe.herokuapp.com/api/films/6/"
            ],
            "created": "2014-12-09T13:50:49.641000Z",
            "edited": "2014-12-20T20:58:18.411000Z",
            "url": "https://swapi-trybe.herokuapp.com/api/planets/1/"
        },
        {
            "name": "Alderaan",
            "rotation_period": "24",
            "orbital_period": "364",
            "diameter": "12500",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "grasslands, mountains",
            "surface_water": "40",
            "population": "2000000000",
            "residents": [
                "https://swapi-trybe.herokuapp.com/api/people/5/",
                "https://swapi-trybe.herokuapp.com/api/people/68/",
                "https://swapi-trybe.herokuapp.com/api/people/81/"
            ],
            "films": [
                "https://swapi-trybe.herokuapp.com/api/films/1/",
                "https://swapi-trybe.herokuapp.com/api/films/6/"
            ],
            "created": "2014-12-10T11:35:48.479000Z",
            "edited": "2014-12-20T20:58:18.420000Z",
            "url": "https://swapi-trybe.herokuapp.com/api/planets/2/"
        },
        {
            "name": "Yavin IV",
            "rotation_period": "24",
            "orbital_period": "4818",
            "diameter": "10200",
            "climate": "temperate, tropical",
            "gravity": "1 standard",
            "terrain": "jungle, rainforests",
            "surface_water": "8",
            "population": "1000",
            "residents": [],
            "films": [
                "https://swapi-trybe.herokuapp.com/api/films/1/"
            ],
            "created": "2014-12-10T11:37:19.144000Z",
            "edited": "2014-12-20T20:58:18.421000Z",
            "url": "https://swapi-trybe.herokuapp.com/api/planets/3/"
        },
        {
            "name": "Hoth",
            "rotation_period": "23",
            "orbital_period": "549",
            "diameter": "7200",
            "climate": "frozen",
            "gravity": "1.1 standard",
            "terrain": "tundra, ice caves, mountain ranges",
            "surface_water": "100",
            "population": "unknown",
            "residents": [],
            "films": [
                "https://swapi-trybe.herokuapp.com/api/films/2/"
            ],
            "created": "2014-12-10T11:39:13.934000Z",
            "edited": "2014-12-20T20:58:18.423000Z",
            "url": "https://swapi-trybe.herokuapp.com/api/planets/4/"
        },
        {
            "name": "Dagobah",
            "rotation_period": "23",
            "orbital_period": "341",
            "diameter": "8900",
            "climate": "murky",
            "gravity": "N/A",
            "terrain": "swamp, jungles",
            "surface_water": "8",
            "population": "unknown",
            "residents": [],
            "films": [
                "https://swapi-trybe.herokuapp.com/api/films/2/",
                "https://swapi-trybe.herokuapp.com/api/films/3/",
                "https://swapi-trybe.herokuapp.com/api/films/6/"
            ],
            "created": "2014-12-10T11:42:22.590000Z",
            "edited": "2014-12-20T20:58:18.425000Z",
            "url": "https://swapi-trybe.herokuapp.com/api/planets/5/"
        },
        {
            "name": "Bespin",
            "rotation_period": "12",
            "orbital_period": "5110",
            "diameter": "118000",
            "climate": "temperate",
            "gravity": "1.5 (surface), 1 standard (Cloud City)",
            "terrain": "gas giant",
            "surface_water": "0",
            "population": "6000000",
            "residents": [
                "https://swapi-trybe.herokuapp.com/api/people/26/"
            ],
            "films": [
                "https://swapi-trybe.herokuapp.com/api/films/2/"
            ],
            "created": "2014-12-10T11:43:55.240000Z",
            "edited": "2014-12-20T20:58:18.427000Z",
            "url": "https://swapi-trybe.herokuapp.com/api/planets/6/"
        },
        {
            "name": "Endor",
            "rotation_period": "18",
            "orbital_period": "402",
            "diameter": "4900",
            "climate": "temperate",
            "gravity": "0.85 standard",
            "terrain": "forests, mountains, lakes",
            "surface_water": "8",
            "population": "30000000",
            "residents": [
                "https://swapi-trybe.herokuapp.com/api/people/30/"
            ],
            "films": [
                "https://swapi-trybe.herokuapp.com/api/films/3/"
            ],
            "created": "2014-12-10T11:50:29.349000Z",
            "edited": "2014-12-20T20:58:18.429000Z",
            "url": "https://swapi-trybe.herokuapp.com/api/planets/7/"
        },
        {
            "name": "Naboo",
            "rotation_period": "26",
            "orbital_period": "312",
            "diameter": "12120",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "grassy hills, swamps, forests, mountains",
            "surface_water": "12",
            "population": "4500000000",
            "residents": [
                "https://swapi-trybe.herokuapp.com/api/people/3/",
                "https://swapi-trybe.herokuapp.com/api/people/21/",
                "https://swapi-trybe.herokuapp.com/api/people/35/",
                "https://swapi-trybe.herokuapp.com/api/people/36/",
                "https://swapi-trybe.herokuapp.com/api/people/37/",
                "https://swapi-trybe.herokuapp.com/api/people/38/",
                "https://swapi-trybe.herokuapp.com/api/people/39/",
                "https://swapi-trybe.herokuapp.com/api/people/42/",
                "https://swapi-trybe.herokuapp.com/api/people/60/",
                "https://swapi-trybe.herokuapp.com/api/people/61/",
                "https://swapi-trybe.herokuapp.com/api/people/66/"
            ],
            "films": [
                "https://swapi-trybe.herokuapp.com/api/films/3/",
                "https://swapi-trybe.herokuapp.com/api/films/4/",
                "https://swapi-trybe.herokuapp.com/api/films/5/",
                "https://swapi-trybe.herokuapp.com/api/films/6/"
            ],
            "created": "2014-12-10T11:52:31.066000Z",
            "edited": "2014-12-20T20:58:18.430000Z",
            "url": "https://swapi-trybe.herokuapp.com/api/planets/8/"
        },
        {
            "name": "Coruscant",
            "rotation_period": "24",
            "orbital_period": "368",
            "diameter": "12240",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "cityscape, mountains",
            "surface_water": "unknown",
            "population": "1000000000000",
            "residents": [
                "https://swapi-trybe.herokuapp.com/api/people/34/",
                "https://swapi-trybe.herokuapp.com/api/people/55/",
                "https://swapi-trybe.herokuapp.com/api/people/74/"
            ],
            "films": [
                "https://swapi-trybe.herokuapp.com/api/films/3/",
                "https://swapi-trybe.herokuapp.com/api/films/4/",
                "https://swapi-trybe.herokuapp.com/api/films/5/",
                "https://swapi-trybe.herokuapp.com/api/films/6/"
            ],
            "created": "2014-12-10T11:54:13.921000Z",
            "edited": "2014-12-20T20:58:18.432000Z",
            "url": "https://swapi-trybe.herokuapp.com/api/planets/9/"
        },
        {
            "name": "Kamino",
            "rotation_period": "27",
            "orbital_period": "463",
            "diameter": "19720",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "ocean",
            "surface_water": "100",
            "population": "1000000000",
            "residents": [
                "https://swapi-trybe.herokuapp.com/api/people/22/",
                "https://swapi-trybe.herokuapp.com/api/people/72/",
                "https://swapi-trybe.herokuapp.com/api/people/73/"
            ],
            "films": [
                "https://swapi-trybe.herokuapp.com/api/films/5/"
            ],
            "created": "2014-12-10T12:45:06.577000Z",
            "edited": "2014-12-20T20:58:18.434000Z",
            "url": "https://swapi-trybe.herokuapp.com/api/planets/10/"
        }
    ]
  }
  jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(info),
    }));
};
describe('testando a pagina funcionando', () => {
  beforeEach(mockFetch);
  afterEach(() => jest.clearAllMocks());
  test('testa o fetch da api',async  () => {
    render(<App />);
    await waitFor(()=> {
    expect(global.fetch).toHaveBeenCalled();
  })
  })
  test('Testa se existe o texto principal do projeto na tela', async  () => {
    render(<App />);
    await waitFor(() => {
    const headText = screen.getByRole('heading', {name: /projeto Star Wars/i})
    expect(headText).toBeInTheDocument();
  })
  })

  test('testa se há um input para pesquisa de nome na tela',async  () => {
    render(<App />);
    await waitFor(()=> {

    const input = screen.getByTestId('name-filter')
    expect(input).toBeInTheDocument();
    });
  })
  test('testa se for digitado "too" no campo de texto, o planeta "Tatooine" é exibido',async  () => {
    render(<App />);
    await waitFor(()=> {

    const input = screen.getByTestId('name-filter')
    const itemTable = document.getElementsByTagName('tr')
    userEvent.type(input, 'too')
    expect(itemTable).toHaveLength(1);
    })
  })
  it('testa se os selects e suas opções estao na tela',async  ()=> {
    render(<App />)
    await waitFor(()=> {

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
})
test('testa se existe um botao de filtrar na tela',async  () => {
  render(<App />);
  await waitFor(()=> {

  const filterButton = screen.getByTestId('button-filter')
  
  expect(filterButton).toBeInTheDocument();
  })
})
test('testa o botão de filtrar sem alterar os valores iniciais dos inputs ',async  () => {
  render(<App />);
  await waitFor(()=> {
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
})

test('testa o filtro maior que',async  () => {
  render(<App />);
  await waitFor(()=> {
  const selectColumn = screen.getByTestId('column-filter')
  const selectOperator = screen.getByTestId('comparison-filter')
  const value = screen.getByTestId('value-filter')
  const filterButton = screen.getByTestId('button-filter')
  const itemTable = document.getElementsByTagName('tr')
  expect(screen.getAllByTestId('planet-name')).toHaveLength(10);

  userEvent.selectOptions(selectColumn, 'diameter');
  userEvent.selectOptions(selectOperator, 'maior que');
  userEvent.type(value, '10000')
  userEvent.click(filterButton)

  expect(screen.getAllByTestId('planet-name')).toHaveLength(7);
  userEvent.click(screen.getByTestId('button-remove-filters'))
  expect(screen.getAllByTestId('planet-name')).toHaveLength(10);
  })
})
test('testa o filtro menor que',async  () => {
  render(<App />);
  await waitFor(()=> {
  const selectColumn = screen.getByTestId('column-filter')
  const selectOperator = screen.getByTestId('comparison-filter')
  const value = screen.getByTestId('value-filter')
  const filterButton = screen.getByTestId('button-filter')
  const itemTable = document.getElementsByTagName('tr')
  expect(screen.getAllByTestId('planet-name')).toHaveLength(10);
  
  userEvent.selectOptions(selectColumn, 'rotation_period');
  userEvent.selectOptions(selectOperator, 'menor que');
  userEvent.type(value, '23')
  userEvent.click(filterButton)

  expect(screen.getAllByTestId('planet-name')).toHaveLength(2);
  })
})

test('testa o filtro igual a', async  () => {
  render(<App />);
  await waitFor(()=> {
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

  test('testa se remove todos os filtros',async  () => {
    render(<App />);
    await waitFor(async  () => {
    const selectColumn =  screen.getByTestId('column-filter')
    const selectOperator = screen.getByTestId('comparison-filter')
    const value = screen.getByTestId('value-filter')
    const filterButton = screen.getByTestId('button-filter')

    userEvent.selectOptions(selectColumn, 'surface_water');
    userEvent.selectOptions(selectOperator, 'igual a');
    fireEvent.change(value, { target: { value: '' } });
    userEvent.type(value, '8')
    userEvent.click(filterButton)
    userEvent.selectOptions(selectColumn, 'rotation_period');
    userEvent.selectOptions(selectOperator, 'igual a');
    fireEvent.change(value, { target: { value: '' } });
    userEvent.type(value, '23')
    userEvent.click(filterButton)
    

    expect(screen.getByText('rotation_period igual a 23')).toBeInTheDocument()

    })

  })
  test('se a tabela foi atualizada com as informações filtradas, depois remove o filtro', async () => {
    render(<App />);
    await waitFor( async  ()=> {
    const selectColumn = await screen.findByTestId('column-filter');
    const selectOperator = await screen.findByTestId('comparison-filter');
    const value = await screen.findByTestId('value-filter');
    const button = await screen.findByTestId('button-filter');
  
  
    userEvent.selectOptions(selectColumn, 'diameter')
    userEvent.selectOptions(selectOperator, 'igual a');
    fireEvent.change(value, { target: { value: '' } });
    userEvent.type(value, '8900')
    userEvent.click(button);

    const buttonRemove = await screen.findByText(/excluir/i)
    expect(await screen.findByText(/diameter igual a 8900/i)).toBeInTheDocument();

    userEvent.click(buttonRemove)
    })
  })
  test('testa se ordena os planetas do maior período orbital para o menor período orbital;', async  () => {
    render(<App />);
    await waitFor(()=> {
    const radioAsc = screen.getByTestId('column-sort-input-asc');
    const radioDesc = screen.getByTestId('column-sort-input-desc');
    const buttonOrder = screen.getByTestId('column-sort-button')
    const selectColumn = screen.getByTestId('column-sort')
    expect((screen.getAllByTestId('planet-name'))[0]).toHaveTextContent('Alderaan')
    expect(radioAsc).toBeInTheDocument();
    expect(radioDesc).toBeInTheDocument();
    expect(buttonOrder).toBeInTheDocument();
    expect(selectColumn).toBeInTheDocument();
    
    userEvent.selectOptions(selectColumn, 'orbital_period');
    userEvent.click(radioAsc);
    userEvent.click(buttonOrder);
    expect((screen.getAllByTestId('planet-name'))[0]).toHaveTextContent('Tatooine')
    userEvent.selectOptions(selectColumn, 'population');
    userEvent.click(radioDesc);
    userEvent.click(buttonOrder);
    expect((screen.getAllByTestId('planet-name'))[0]).toHaveTextContent('Yavin IV')
    
  
    })
})
})
