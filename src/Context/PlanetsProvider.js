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

  const handleFilter = (p, filter) => {
    let planets = [...p];
    if (filter !== undefined) {
      filter.map((current) => {
        console.log(current);
        if (current.comparison === 'maior que') {
          planets = planets
            .filter((planet) => Number(planet[current.column]) > Number(current.value));
          setPlanetsInfo(planets);
          console.log(planets);
        }
        if (current.comparison === 'menor que') {
          console.log('menor que', planets);
          planets = planets
            .filter((planet) => Number(planet[current.column]) < Number(current.value));
          setPlanetsInfo(planets);
        }
        if (current.comparison === 'igual a') {
          planets = planets
            .filter((planet) => Number(planet[current.column]) === Number(current.value));
          setPlanetsInfo(planets);
          console.log('igual a', planets);
        }
        return planets;
      });
    }
    // console.log(planets);
    // setPlanetsInfo(planets);
    // console.log(filtered);
  };
  // const handleFilter = (filter) => (!filter ? planetsInfo : );

  const addFilter = (obj) => {
    setFilterByNumericValues([...filterByNumericValues, obj]);
    handleFilter(planetsInfo, [...filterByNumericValues, obj]);
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
