import React from 'react';

const Search = ({ handleChange }) => {
  return (
    <div className='search'>
      Search items
      <input placeholder='Search for your food...' onChange={handleChange}></input>
    </div>
  );
};

export default Search;