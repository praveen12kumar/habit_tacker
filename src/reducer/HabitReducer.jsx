
import {habits} from "../db"
export const HabitReducer = (state, {type, payload})=>{
    
    switch (type) {

        case "delete":
            return{
               ...state, habits:payload
            }
        case "create":
            return{
                ...state, habits:[...habits, payload]
            }

        default: 
            return state;

    }
}