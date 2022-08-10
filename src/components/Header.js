import React from 'react';
import PropTypes from 'prop-types';

function Header({ search, setSearch }) {
  return (
    <div className="header-conteiner">
      <h1 className="title">Projeto Star Wars - CHAPETTA</h1>
      <input
        data-testid="name-filter"
        className="input-filter-name"
        name="name"
        value={ search }
        onChange={ (e) => setSearch(e.target.value) }
      />
    </div>
  );
}

Header.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Header;
