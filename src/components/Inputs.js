import React, { useContext, useState } from 'react';
import planetsContext from '../Context/PlanetContext';

function Inputs() {
  const { removeFilter, order, columnArray, setColumnFilter,
    filterByNumericValues, setFilterByNumericValues, column,
    handleFilter, data, setColumn,
  } = useContext(planetsContext);
  // console.log(filterByNumericValues);
  const operador = ['maior que', 'menor que', 'igual a'];
  const [option, setOption] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const addFilter = (obj) => {
    setFilterByNumericValues([...filterByNumericValues, obj]);
    handleFilter(data, [...filterByNumericValues, obj]);
    // console.log(obj);
    const clone = [...column];
    const results = clone.filter((item) => item !== obj.column);
    // clone.splice(index, 1);
    setColumn(results);
    setColumnFilter(results[0]);
    setOption({ ...option, column: results[0] });
    // console.log(results);
  };

  const [sortedColum, setSortedColum] = useState('population');
  const [orderSort, setOrderSort] = useState('ASC');
  // console.log(option);
  // console.log(option);
  const handleOptions = ({ target }) => {
    // console.log(target);
    const { name, value } = target;
    setOption({
      ...option,
      [name]: value,
    });
  };
  // const handleColumn = ({ target }) => {
  //   console.log(target);
  //   handleOptions(target);
  //   setColumnFilter(target.value);
  // };

  return (
    <form>
      Coluna:
      <select
        name="column"
        data-testid="column-filter"
        value={ option.column }
        onChange={ (event) => handleOptions(event) }
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
                excluir

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
