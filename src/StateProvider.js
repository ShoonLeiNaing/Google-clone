import React,{useContext,useReducer,createContext} from 'react'

const StateContext=createContext()
export const StateProvider = ({reducer,initialState,children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue=()=>useContext(StateContext)