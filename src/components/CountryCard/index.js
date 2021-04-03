import React from 'react';

const CountryCard = ({
  country: { name, capital, flag, population, region, alpha3Code },
  onCountrySelect,
}) => {
  return (
    <li className="country" onClick={() => onCountrySelect(alpha3Code)}>
      <img src={flag} alt={`Flag of ${name}`} />
      <div className="info">
        <h2>{name}</h2>
        <div>
          <span>Population: </span>
          {population.toLocaleString()}
        </div>
        <div>
          <span>Region: </span>
          {region}
        </div>
        <div>
          <span>Capital: </span>
          {capital}
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
