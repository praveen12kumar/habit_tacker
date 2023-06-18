import React from 'react'
import { useContext } from 'react'
import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineEdit, AiFillDelete} from "react-icons/ai";
import {BsFillArchiveFill} from "react-icons/bs";
import { HabitContext } from '../context/HabitContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./home.scss";
const Home = () => {
    const navigate = useNavigate();
    const {habits} = useContext(HabitContext);
    console.log('HabitConte', habits);


  return (
    <div className='habit-section'>
        <div className="habit-container">
                <div className="createHabit">
                    <div className="add-habit">
                        <span><AiOutlinePlusCircle/></span>
                        <h2>Create Own Habit</h2>
                    </div>
                </div>
                <div className="habit-box">
                    {
                        habits.map((habit) =>(
                            <div className="habit" key={habit.title} 
                                onClick={()=> navigate(`/${habit.id}`)}
                            >
                                <h2>{habit.title}</h2>
                                <div className="button-section">
                                    <button><AiOutlineEdit/></button>
                                    <button><AiFillDelete/></button>
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
