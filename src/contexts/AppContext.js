import { createContext, useContext, useReducer } from "react";

const useCartState = createContext();
const useCartDispatch = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.item];
    case "REMOVE_FROM_CART":
      const newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    default:
      throw new Error(`no meaningful action detected ${ action.type }`);    
  }
}

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer,[])
  return (
    <useCartDispatch.Provider value={dispatch}>
      <useCartState.Provider value={state}>
        {props.children}
      </useCartState.Provider>
    </useCartDispatch.Provider>
  )
}
export const CartContextState =()=> useContext(useCartState);
export const CartContextdispatch =()=> useContext(useCartDispatch);
export default AppContextProvider;