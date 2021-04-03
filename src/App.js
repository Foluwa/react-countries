import React, { useState, useEffect } from 'react';
import Header from './components/Header/index';
import Countries from './components/Countries/index';
import Search from './components/Search/index';
import Filter from './components/Filter/index';
import Country from './components/Country/index';
import { filterCountries, getRegions, getCountry } from './utils/utils';

const App = () => {
  const [lightMode, setLightMode] = useState(true);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [country, setCountry] = useState(null);

  useEffect(() => {
    let isActive = true;
    setLoading(true);
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          if (isActive) {
            setLoading(false);
            setCountries(data);
          }
        },
        (error) => {
          console.error(error);
          setError(error);
          setLoading(false);
        }
      );
    return () => {
      isActive = false;
    };
  }, []);

  const handleModeChange = () => {
    lightMode ? setLightMode(false) : setLightMode(true);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleFilter = (value) => {
    setFilterValue(value);
  };

  let countriesComponent;
  if (error) {
    countriesComponent = <div>{error.message}</div>;
  } else if (loading) {
    countriesComponent = <div>Loading...</div>;
  } else {
    let filteredCountries = filterCountries(
      countries,
      searchValue,
      filterValue
    );

    countriesComponent = (
      <Countries countries={filteredCountries} onCountrySelect={setCountry} />
    );
  }

  return (
    <div className={lightMode ? 'light' : 'dark'}>
      <Header mode={lightMode} handleChange={handleModeChange} />
      <main>
        <div className="container">
          {country ? (
            <Country
              country={getCountry(countries, country)}
              handleClick={setCountry}
            />
          ) : (
            <>
              <div className="filters-wrapper">
                <Search handleSearch={handleSearch} value={searchValue} />
                <Filter
                  handleFilter={handleFilter}
                  regions={getRegions(countries)}
                  selected={filterValue}
                />
              </div>
              {countriesComponent}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
