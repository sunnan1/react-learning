import React , {useState} from "react";

const NewGoal = props => { 
    const [startText , newText] = useState('ASD');
    const goalHandler = event => {
        event.preventDefault();
        props.newGoal({
            id : Math.random().toString(),
            text : startText,
        })
        newText('');
    };

    const textChangeHandler = event => {
        newText(event.target.value);
    };

    return (
        <form className="goal-form" onSubmit={goalHandler}>
            <input type="text" value={startText} onChange={textChangeHandler} />
            <input type="submit" value="Add Goal" />
        </form>
    );
} ;

export default NewGoal;
