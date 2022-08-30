import React , {useState} from 'react';
import  GoalList from "./components/Goals";
import  NewGoal from "./components/NewGoal";
const App = () => {
  const [goals, setGoals] = useState([
    { id : 1 , text : "This is 1st text"},
    { id : 2 , text : "This is 2st text"},
    { id : 3 , text : "This is 3st text"},
    { id : 4 , text : "This is 4st text"},
    { id : 5 , text : "This is 5st text"},
  ]);

  const addGoal = (goal) => {
    //setGoals(goals.concat(goal)); // use this if you want to change value of state
    // use the below one if you want to add data in the exisiting snap of state for better performance
    setGoals((oldGoals) => {
      return oldGoals.concat(goal);
    });
  };

  return (
      <div>
        <h3>Here are my Goals</h3>  
        <NewGoal newGoal={addGoal} />
        <GoalList goals={goals} />
      </div>
  );
};

export default App;
