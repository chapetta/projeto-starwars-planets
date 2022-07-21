import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetContext';

function PlanetsProvider({ children }) {
  const [planetsInfo, setPlanetsInfo] = useState({});
  useEffect(() => {
    async function fetchData() {
      const fetchAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await fetchAPI.json();
      setPlanetsInfo(data);
    }
    fetchData();
  }, []);

  return (
    <planetsContext.Provider value={ { data: planetsInfo } }>
      {children}
    </planetsContext.Provider>

  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PlanetsProvider;
