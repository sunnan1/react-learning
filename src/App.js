import React from 'react';
import  GoalList from "./components/Goals";
const App = () => {
  const goals = [
    { id : 1 , text : "This is 1st text"},
    { id : 2 , text : "This is 2st text"},
    { id : 3 , text : "This is 3st text"},
    { id : 4 , text : "This is 4st text"},
    { id : 5 , text : "This is 5st text"},
  ]
  return (
      <div>
        <h3>Here are my Goals</h3>  
        <GoalList goals={goals} />
      </div>
  );
};

export default App;
