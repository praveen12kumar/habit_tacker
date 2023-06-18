import { createContext } from "react";
import { useReducer } from "react";
import { habits } from "../db";
import {habitReducer} from "../reducer/HabitReducer";
export const HabitContext = createContext();

export const HabotProvider = ({children})=>{

    const initialState = {
        habits:habits,

    }

    const [state, dispatch] = useReducer(habitReducer, initialState);

    return(
        <HabitContext.Provider value={{
            habits: state.habits,
        }}  >
            {children}
        </HabitContext.Provider>
    )
}