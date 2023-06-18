import {habits} from "../db";

export const HabitReducer = (state, {type, payload})=>{
    console.log(state.habits);
    switch (type) {
        case "delete":
            return{
               
            }

        default: 
            return state;

    }
}