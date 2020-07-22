import React, { useState, useContext, createContext } from 'react';
import { format } from 'date-fns';

const SearchContext = createContext();

const useSearchProvider = () => {
  const today = format(new Date(), 'EEEE');
  const [search, setSearch] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState(today);
  const [alcoholTypeFilters, setAlcoholTypeFilters] = useState(['BEER', 'WINE', 'LIQUOR', 'FOOD']);

  const onChangeDayOfWeek = (e) => {
    setDayOfWeek(e.target.value);
  };

  const onFilterAlcoholType = (newValues) => {
    setAlcoholTypeFilters(newValues);
  };

  const onSearch = (e) => {
    e.preventDefault();

    const searchValue = e.target.value;
    const valueWithoutSlash = searchValue.replace('/', '');

    setSearch(valueWithoutSlash);
    return valueWithoutSlash;
  };

  return {
    alcoholTypeFilters,
    dayOfWeek,
    onFilterAlcoholType,
    onChangeDayOfWeek,
    onSearch,
    search
  };
};

export const SearchProvider = ({ children }) => {
  const search = useSearchProvider();
  return <SearchContext.Provider value={search}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  return useContext(SearchContext);
};
