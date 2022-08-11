import React, { useContext, useState } from 'react';
import planetsContext from '../Context/PlanetContext';

function Inputs() {
  const { addFilter, column, removeFilter, order, columnArray,
    filterByNumericValues, setFilterByNumericValues,
    columnFilter } = useContext(planetsContext);
  // console.log(filterByNumericValues);
  const operador = ['maior que', 'menor que', 'igual a'];
  const [option, setOption] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [sortedColum, setSortedColum] = useState('population');
  const [orderSort, setOrderSort] = useState('ASC');

  // console.log(option);
  const handleOptions = ({ target }) => {
    const { name, value } = target;
    setOption({
      ...option,
      [name]: value,
    });
  };

  return (
    <form>
      Coluna:
      <select
        name="column"
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ handleOptions }
      >
        {column.map((e, index) => (
          <option key={ index }>{e}</option>
        ))}
      </select>
      Operador:
      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ option.comparison }
        onChange={ handleOptions }
      >
        {operador.map((e, index) => (
          <option key={ index }>{e}</option>
        ))}
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        value={ option.value }
        onChange={ handleOptions }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => addFilter(option) }
      >
        FILTRAR

      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => setFilterByNumericValues([]) }
      >
        Remover Filtros

      </button>
      <div>
        <ul>
          {filterByNumericValues.map((item, index) => (
            <div key={ index } data-testid="filter">
              <li>{`${item.column} ${item.comparison} ${item.value}`}</li>
              <button
                type="button"
                onClick={ () => removeFilter(item.column) }
              >
                exlcuir

              </button>
            </div>
          ))}
        </ul>
      </div>
      <select
        value={ sortedColum }
        onChange={ ({ target }) => setSortedColum(target.value) }
        data-testid="column-sort"
      >
        {
          columnArray.map((element) => (
            <option key={ element } value={ element }>
              { element }
            </option>
          ))
        }
      </select>
      <label htmlFor="ascendente">
        Ascendente
        <input
          type="radio"
          name="radio"
          value="ASC"
          onChange={ () => setOrderSort('ASC') }
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="descendente">
        Descendente
        <input
          type="radio"
          name="radio"
          value="DESC"
          onChange={ () => setOrderSort('DESC') }
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        type="button"
        onClick={ () => order(sortedColum, orderSort) }
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </form>
  );
}

export default Inputs;
