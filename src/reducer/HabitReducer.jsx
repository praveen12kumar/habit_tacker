

export const HabitReducer = (state, {type, payload})=>{
    
    switch (type) {
        case "delete":
            return{
               ...state, habits:payload
            }

        default: 
            return state;

    }
}