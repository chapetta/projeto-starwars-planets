import React, { useContext, useState } from 'react';
import planetsContext from '../Context/PlanetContext';

function Inputs() {
  const { addFilter, column } = useContext(planetsContext);

  const operador = ['maior que', 'menor que', 'igual a'];
  const [option, setOption] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  console.log(option);
  const handleOptions = ({ target }) => {
    const { name, value } = target;
    setOption({
      ...option,
      [name]: value,
    });
  };

  // const removeFilter = () => {

  // };

  return (
    <form>
      Coluna:
      <select
        name="column"
        data-testid="column-filter"
        value={ option.column }
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
    </form>
  );
}

export default Inputs;
