import React, { useContext, useState } from 'react';
import planetsContext from '../Context/PlanetContext';
// import PlanetsProvider from '../Context/PlanetsProvider';
import Header from './Header';
import Inputs from './Inputs';

function Table() {
  const { data } = useContext(planetsContext);
  const [search, setSearch] = useState('');
  return (
    <div>
      <Header search={ search } setSearch={ setSearch } />
      <Inputs search={ search } setSearch={ setSearch } />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>Roation period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>

          {data && data
            .filter((item) => item.name.includes(search))
            .map((e, index) => (
              <tr key={ index }>
                <td>{ e.name }</td>
                <td>{ e.rotation_period }</td>
                <td>{ e.orbital_period }</td>
                <td>{ e.diameter }</td>
                <td>{ e.climate }</td>
                <td>{ e.gravity }</td>
                <td>{ e.terrain }</td>
                <td>{ e.surface_water }</td>
                <td>{ e.population }</td>
                <td>{ e.created }</td>
                <td>{ e.edited }</td>
                <td>{ e.films.map((item) => item) }</td>
                <td>{ e.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>

  );
}
// usei esse video para ter uma ideia de como consturir uma tabela https://www.youtube.com/watch?v=MX1yNfZkC6g
export default Table;
