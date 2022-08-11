import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetContext';

const columnArray = ['population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

function PlanetsProvider({ children }) {
  const [planetsInfo, setPlanetsInfo] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [column, setColumn] = useState([...columnArray]);
  const [columnFilter, setColumnFilter] = useState(columnArray[0]);

  useEffect(() => {
    async function fetchData() {
      const fetchAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await fetchAPI.json();
      const { results } = data;
      setPlanetsInfo(results.sort((a, b) => a.name.localeCompare(b.name)));
    }
    fetchData();
  }, []);
  const handleFilter = (p, filter) => {
    let planets = [...p];
    // console.log(filter);
    if (filter !== undefined) {
      filter.map((current) => {
        if (current.comparison === 'maior que') {
          planets = planets
            .filter((planet) => Number(planet[current.column]) > Number(current.value));
          // setPlanetsInfo(planets);
        }
        if (current.comparison === 'menor que') {
          planets = planets
            .filter((planet) => Number(planet[current.column]) < Number(current.value));
          // setPlanetsInfo(planets);
        }
        if (current.comparison === 'igual a') {
          planets = planets
            .filter((planet) => Number(planet[current.column]) === Number(current.value));
          // setPlanetsInfo(planets);
        }
        // console.log(planets);
        return planets;
      });
      return planets;
    }
    // console.log(planets);
    // setPlanetsInfo(planets);
    // console.log(filtered);
  };
  // const handleFilter = (filter) => (!filter ? planetsInfo : );

  // const addFilter = (obj) => {
  //   setFilterByNumericValues([...filterByNumericValues, obj]);
  //   handleFilter(planetsInfo, [...filterByNumericValues, obj]);
  //   console.log(obj);
  //   const clone = [...column];
  //   const results = clone.filter((item) => item !== obj.column);
  //   // clone.splice(index, 1);
  //   setColumn(results);
  //   setColumnFilter(results[0]);
  //   console.log(results);
  // };

  const removeFilter = (item) => {
    const result = filterByNumericValues.filter((e) => e.column !== item);
    setFilterByNumericValues(result);
  };

  // useEffect(() => {
  //   const clone = [...column];
  //   // console.log(column[0]);
  //   setColumnFilter(clone[0]);
  //   // console.log(column[0]);
  // }, [column]);

  const order = (sortedColumn, orders) => {
    const num = -1;
    const result = planetsInfo.sort((a, b) => {
      if (b[sortedColumn] === 'unknown') {
        return num;
      }
      if (orders === 'ASC') {
        return Number(a[sortedColumn]) - Number(b[sortedColumn]);
      }
      return Number(b[sortedColumn]) - Number(a[sortedColumn]);
    });
    setPlanetsInfo([...result]);
    // console.log(columnSort, orders);
    // console.log(newData);
    // console.log(planetsInfo);
  };

  return (
    <planetsContext.Provider
      value={ {
        data: planetsInfo,
        column,
        setColumnFilter,
        filterByNumericValues,
        setFilterByNumericValues,
        columnFilter,
        removeFilter,
        order,
        columnArray,
        handleFilter,
        setColumn,
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
