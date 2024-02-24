import React, { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import FoodData from './components/FoodData';
import Search from './components/Search';

const App = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredFood = FoodData.filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Search handleChange={handleChange} />
      {filteredFood.map((food) => {
        return <FoodBox key={food.id} food={food} />;
      })}
    </div>
  );
};

export default App;