import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetContext';

function PlanetsProvider({ children }) {
  const [planetsInfo, setPlanetsInfo] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const fetchAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await fetchAPI.json();
      setPlanetsInfo(data.results);
    }
    fetchData();
  }, []);

  const handleFilter = (filter) => {
    let planets = [...planetsInfo];
    filter.forEach((current) => {
      console.log(planets);
      if (current.comparison === 'maior que') {
        planets = planets
          .filter((planet) => Number(planet[current.column]) > Number(current.value));
      }
      if (current.comparison === 'menor que') {
        planets = planets
          .filter((planet) => Number(planet[current.column]) < Number(current.value));
      } else {
        planets = planets
          .filter((planet) => Number(planet[current.column]) === Number(current.value));
      }
    });
    console.log(planets);
    console.log(filter);
  };
  // const handleFilter = (filter) => (!filter ? planetsInfo : );

  const addFilter = (obj) => {
    setFilterByNumericValues([...filterByNumericValues, obj]);
    handleFilter([...filterByNumericValues, obj]);
  };

  return (
    <planetsContext.Provider
      value={ {
        data: planetsInfo,
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
