export const filterCountries = (countries, searchVal, filterVal) => {
    const filteredBySearch = filterBySearchValue(countries, searchVal);
    const filteredByRegion = filterByRegion(filteredBySearch, filterVal);
  
    return filteredByRegion;
  };
  
  const filterBySearchValue = (countries, searchVal) => {
    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(searchVal.toLowerCase()) ||
        country.capital.toLowerCase().includes(searchVal.toLowerCase())
    );
  };
  
  const filterByRegion = (countries, filterVal) => {
    if (filterVal === '' || filterVal === 'default') {
      return countries;
    }
    return countries.filter((country) =>
      country.region.toLowerCase().includes(filterVal.toLowerCase())
    );
  };
  
  export const getRegions = (countries) => {
    return countries.reduce((regions, country) => {
      if (country.region && !regions.includes(country.region)) {
        regions.push(country.region);
      }
      return regions;
    }, []);
  };
  
  export const getCountry = (countries, code) => {
    return countries.filter((country) => country.alpha3Code === code)[0];
  };
  