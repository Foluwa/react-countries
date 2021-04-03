import React from 'react';

const Search = ({ handleSearch, value }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    handleSearch(value);
  };

  return (
    <div className="search">
      <div className="search-icon">
        <i className="fas fa-search"></i>
      </div>
      <input
        className="search-input"
        type="search"
        onChange={handleChange}
        placeholder="Search for a country..."
        value={value}
      />
    </div>
  );
};

export default Search;
