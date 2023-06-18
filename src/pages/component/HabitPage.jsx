import React from 'react'
import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { HabitContext } from '../../context/HabitContext';
const HabitPage = () => {
    const {habits}= useContext(HabitContext);
    
    const navigate = useNavigate();
    const {habitId} = useParams();
    
    //console.log("habitId", typeof(habitId), habitId);

    const newHabit = habits.find((item)=> item.id === habitId);

    // console.log("newHabit",newHabit);
    
    const {id, title, repeat, time_of_day, goal, start_data} = newHabit;
    
    return (
    <div className='habit-page-container'>

        <div className="habit-container" key={id}>
            <h1><strong>Title: </strong>{title}</h1>
            <p> <strong>Repeat: </strong>  {repeat}</p>
            <p><strong>Time of Day: </strong>{time_of_day}</p>
            <p><strong>Goal: </strong>{goal}</p>
            <p><strong>start date:</strong>{start_data}</p>
        </div>
        <button onClick={()=> navigate('/')}>habits</button>
    </div>
  )
}

export default HabitPage
