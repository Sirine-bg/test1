import React, {useState} from 'react';

function Add () {
    const [ toDoList, setToDoList ] = useState("");
    const addTask = (userInput ) => {
        let copy = [...toDoList];
        copy.push({ task: userInput});
        setToDoList(copy);
	  }
    const [ userInput, setUserInput ] = useState('');
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
         addTask(userInput);
        setUserInput("");
  
    }
  
    return (
      <form >
       
        <input value={userInput} type="text" onChange={handleChange}  placeholder="Enter task..."/>
     <button onSubmit={handleSubmit}>Submit </button>
      </form>
    );
  }
  
 export default Add