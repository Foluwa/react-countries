import React from 'react';

const Filter = ({ regions, handleFilter, selected }) => {
  const handleSelect = (e) => {
    const { value } = e.target;
    handleFilter(value);
  };

  return (
    <div className="region-filter">
      <select
        name="countryFilter"
        id="countryFilter"
        onChange={handleSelect}
        defaultValue={
          regions.some((region) => region === selected) ? selected : 'default'
        }
      >
        <option value="default">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;

