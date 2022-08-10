import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetContext';

function PlanetsProvider({ children }) {
  const [planetsInfo, setPlanetsInfo] = useState(null);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const fetchAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await fetchAPI.json();
      console.log(data.results);
      setPlanetsInfo(data.results);
    }
    fetchData();
  }, []);
  const addFilter = (obj) => {
    setFilterByNumericValues([...filterByNumericValues, obj]);
  };
  const filterPlanets = filterByNumericValues.length === 0
    ? planetsInfo : filterByNumericValues.reduce((acc, current) => {
      if (current.comparison === 'maior que') {
        acc = acc.filter((planet) => planet[current.column] > Number(current.value));
      }
      if (current.comparison === 'menor que') {
        acc = acc.filter((planet) => planet[current.column] < Number(current.value));
      } else {
        acc = acc
          .filter((planet) => planet[current.column] === current.value);
      }
      return acc;
    }, [...planetsInfo]);
  return (
    <planetsContext.Provider
      value={ {
        data: filterPlanets,
        addFilter,

      } }
    >
      {children}
    </planetsContext.Provider>

  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PlanetsProvider;
