import React from "react";
import "../App.css";
const Goals = (props) => {
    return (
        <ul className="list">
            {
              props.goals.map( (goal) => {
                return <li key={goal.id}>{goal.text}</li>
              })
            }
        </ul>
    )
};
export default Goals;