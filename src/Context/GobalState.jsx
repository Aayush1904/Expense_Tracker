import React, { createContext , useReducer } from 'react'
import AppReducer from './AppReducer'
//InitialState:
const initialState ={
    transactions : []
        
}

//CreateContext:
export const GlobalContext = createContext(initialState)

//Provider Component:
//useReducer is a React hook that provides a way to manage more complex state logic in functional components
//The useReducer hook takes two arguments: a reducer function and an initial state. It returns an array with two elements:
//State: The current state value.
//Dispatch function: A function to trigger state transitions.
export const GlobalProvider = ({ children }) =>{
 const[state , dispatch] = useReducer(AppReducer , initialState)

//Actions
function deleteTransaction(id) {
    dispatch({
        type : 'DELETE_TRANSACTION',
        payload: id
    });
}

function addTransaction(transaction) {
    dispatch({
        type : 'ADD_TRANSACTION',
        payload: transaction
    });
}


return (<GlobalContext.Provider value ={{
    transactions : state.transactions,
    deleteTransaction,
    addTransaction,
}}>
    { children }
</GlobalContext.Provider>);
}