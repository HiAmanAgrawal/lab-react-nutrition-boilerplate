import React from 'react';

const FoodBox = ({ food }) => {
  return (
    <div key={food.id}>
      <img src={food.img} alt={food.name} />
      <div className='foodName'>{food.name}</div>
    </div>
  );
};

export default FoodBox;