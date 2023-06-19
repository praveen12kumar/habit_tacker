import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useContext, useState } from 'react'
import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineEdit, AiFillDelete} from "react-icons/ai";
import {BsFillArchiveFill} from "react-icons/bs";
import { HabitContext } from '../context/HabitContext';
import { useNavigate } from 'react-router-dom';
import "./home.scss";
const Home = () => {
    const navigate = useNavigate();
    const {habits, dataDispatch} = useContext(HabitContext);

    const [createNew, SetCreateNew] = useState(false);
    const [habitName, setHabitName] = useState("");
    const [repeat, setRepeat]   = useState("");
    const [goal, setGoal] = useState("");
    const [timeofday, setTimeofDay] = useState("");
    const [startDate, setStartDate] = useState("");

    const handleDelete = (id)=>{
        const newHabit = habits.filter((habit)=> habit.id !== id);

        dataDispatch({
            type: 'delete',
            payload: newHabit,
        })
    }

    const handleSubmit = ()=>{
        const newHabit = {
            id:uuidv4(),
            title: habitName,
            repeat:repeat,
            time_of_day:timeofday,
            goal:goal,
            start_date:startDate,
        }
        console.log("newHabit", newHabit);
        dataDispatch({
            type: 'create',
            payload: newHabit,
        })
        SetCreateNew(false);
    }

  return (
    <div className='habit-section'>
        {
           createNew && <div className="new-container">
            <h1>New Habit</h1>
            <div className="habit-input">
                <label htmlFor="habit">Name</label>
                <input type="text"
                value={habitName}
                id='habitName'
                placeholder='Enter Habit'
                onChange={(e)=> setHabitName(e.target.value)}
                />
            </div>
            <div className="other-habits">
            <label htmlFor="repeat">REPEAT</label>
            <select
              name="repeat"
              id="repeat"
              onChange={(e) => setRepeat(e.target.value)}
            >
              <option value="weekly">weekly</option>
              <option value="fortnightly">fortnightly</option>
              <option value="monthly">monthly</option>
            </select>

            <label htmlFor="goal">GOAL</label>
            <select
              name="goal"
              id="goal"
              onChange={(e) => setGoal(e.target.value)}
            >
              <option value="1 time">1 time</option>
              <option value="2 times">2 times</option>
              <option value="3 times">3 times</option>
            </select>

            <label htmlFor="timeofday">Time of Day</label>
            <select
              name="timeofday"
              id="timeofday"
              onChange={(e) => setTimeofDay(e.target.value)}
            >
              <option value="Anytime">Anytime</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>

            <label htmlFor="startdate">START DATE</label>
            <select
              name="startdate"
              id="startdate"
              onChange={(e) => setStartDate(e.target.value)}
            >
              <option value="today">today</option>
              <option value="tomorrow">tomorrow</option>
              <option value="next Week">next Week</option>
            </select>
            </div>
            <button type="submit" onClick={() => handleSubmit()}>
            Submit
            </button>
            <button onClick={() => SetCreateNew(false)}>Cancel</button>
        </div>
        }
        <div className="habit-container">
                <div className="habit-box">
                    <div className="add-habit" onClick={()=> SetCreateNew(true)}>
                        <span><AiOutlinePlusCircle/></span>
                        <h2>Create Own Habit</h2>
                    </div>
                    {
                        habits.map((habit) =>(
                            <div className="habit" key={habit.title}>
                                <h2 onClick={()=> navigate(`/${habit.id}`)}>{habit.title}</h2>
                                <div className="button-section">
                                    <button><AiOutlineEdit/></button>
                                    <button onClick={()=>handleDelete(habit.id)}  ><AiFillDelete/></button>
                                    <button><BsFillArchiveFill/></button>
                                </div>
                            </div>
                        ))
                    }
                </div>
        </div>
    </div>
  )
}

export default Home
