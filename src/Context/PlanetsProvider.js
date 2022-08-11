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
  const [columnFilter, setColumnFilter] = useState(column[0]);

  useEffect(() => {
    async function fetchData() {
      const fetchAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await fetchAPI.json();
      console.log(data);
      const { results } = data;
      setPlanetsInfo(results.sort((a, b) => a.name.localeCompare(b.name)));
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   const newFilter = filterByNumericValues
  //   .reduce((acc, filter) => acc
  //     .filter((planet) => {
  //       switch (filter.comparison) {
  //       case 'maior que':
  //         return Number(planet[filter.column]) > Number(filter.value);
  //       case 'menor que':
  //         return Number(planet[filter.column]) < Number(filter.value);
  //       case 'igual a':
  //         return Number(planet[filter.column]) === Number(filter.value);
  //       default:
  //         return true;
  //       }
  //     }), planetsFilter);
  // }, [filterByNumericValues]);

  const handleFilter = (p, filter) => {
    let planets = [...p];
    if (filter !== undefined) {
      filter.map((current) => {
        // console.log(current);
        if (current.comparison === 'maior que') {
          planets = planets
            .filter((planet) => Number(planet[current.column]) > Number(current.value));
          setPlanetsInfo(planets);
          // console.log(planets);
        }
        if (current.comparison === 'menor que') {
          // console.log('menor que', planets);
          planets = planets
            .filter((planet) => Number(planet[current.column]) < Number(current.value));
          setPlanetsInfo(planets);
        }
        if (current.comparison === 'igual a') {
          planets = planets
            .filter((planet) => Number(planet[current.column]) === Number(current.value));
          setPlanetsInfo(planets);
          // console.log('igual a', planets);
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
    // console.log(obj);
    const results = column.filter((item) => item !== obj.column);
    setColumn(results);
    // console.log(results);
  };

  const removeFilter = (item) => {
    const result = filterByNumericValues.filter((e) => e.column !== item);
    setFilterByNumericValues(result);
  };

  useEffect(() => {
    const clone = [...column];
    console.log(column);
    setColumnFilter(clone[0]);
  }, [column]);

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
        addFilter,
        column,
        setColumn,
        filterByNumericValues,
        setFilterByNumericValues,
        columnFilter,
        removeFilter,
        order,
        columnArray,
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
