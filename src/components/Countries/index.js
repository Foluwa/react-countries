import React from 'react';
import CountryCard from '../CountryCard/index';

const Countries = ({ countries, onCountrySelect }) => {
  return (
    <ul className="countries">
      {countries.map((country) => (
        <CountryCard
          className="countries"
          key={country.name}
          country={country}
          onCountrySelect={onCountrySelect}
        />
      ))}
    </ul>
  );
};

export default Countries;
