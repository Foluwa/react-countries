import React from 'react';

const Country = ({
  country: {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  },
  handleClick,
}) => {
  return (
    <div className="country-page">
      <button className="btn back" onClick={() => handleClick(null)}>
        <i className="fas fa-long-arrow-alt-left  back-icon"></i>Back
      </button>
      <div className="country-page--details">
        <div className="country-page--flag">
          <img
            className="country-page--img"
            src={flag}
            alt={`Flag of ${name}`}
          />
        </div>
        <div className="country-page--info">
          <h2 className="top-gap">{name}</h2>
          <div className="country-page--info-wrapper">
            <div className="country-page--info--left">
              <div className="country-page--info-line">
                <span>Native Name: </span>
                {nativeName}
              </div>
              <div className="country-page--info-line">
                <span>Population: </span>
                {population.toLocaleString()}
              </div>
              <div className="country-page--info-line">
                <span>Region: </span>
                {region}
              </div>
              <div className="country-page--info-line">
                <span>Sub Region: </span>
                {subregion}
              </div>
              <div className="country-page--info-line">
                <span>Capital: </span>
                {capital}
              </div>
            </div>
            <div className="country-page--info--right">
              <div className="country-page--info-line top-gap">
                <span>Top Level Domain: </span>
                {topLevelDomain.join(', ')}
              </div>
              <div className="country-page--info-line">
                <span>Currencies: </span>
                {currencies.map((currency) => currency.name).join(', ')}
              </div>
              <div className="country-page--info-line">
                <span>Languages: </span>
                {languages.map((language) => language.name).join(', ')}
              </div>
            </div>
          </div>
          <div className="top-gap">
            <h3 className="border-countries">Border Countries:</h3>
            {borders.length > 0
              ? borders.map((border) => (
                  <button
                    className="btn country-page--btn"
                    key={border}
                    onClick={() => handleClick(border)}
                  >
                    {border}
                  </button>
                ))
              : 'none'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
