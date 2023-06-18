import React from 'react'
import { useContext } from 'react'
import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineEdit, AiFillDelete} from "react-icons/ai";
import {BsFillArchiveFill} from "react-icons/bs";
import { HabitContext } from '../context/HabitContext';
import { useNavigate } from 'react-router-dom';
import "./home.scss";
const Home = () => {
    const navigate = useNavigate();
    const {habits, dataDispatch} = useContext(HabitContext);
    

    const handleDelete = (id)=>{
        const newHabit = habits.filter((habit)=> habit.id !== id);
        console.log("newHabit1111", newHabit);
        dataDispatch({
            type: 'delete',
            payload: newHabit,
        })
    }

  return (
    <div className='habit-section'>
        <div className="habit-container">
                <div className="habit-box">
                    <div className="add-habit">
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
