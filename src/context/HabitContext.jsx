import { createContext } from "react";
import { useReducer } from "react";
import { habits } from "../db";
import {HabitReducer} from "../reducer/HabitReducer";
export const HabitContext = createContext();

export const HabitProvider = ({children})=>{

    const initialState = {
        habits:habits,

    }

    const [state, dispatch] = useReducer(HabitReducer, initialState);

    return(
        <HabitContext.Provider value={{
            habits: state.habits,
            dataDispatch: dispatch,
        }}  >
            {children}
        </HabitContext.Provider>
    )
}