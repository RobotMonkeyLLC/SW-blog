import { useReducer, createContext, useContext } from "react";

const SWContext = createContext(null);

const TaskReducer = (state, action) => {
	switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      let newState=[...state]
		newState.splice(action.index, 1);
      return newState
    default:
      return state;
  }
};

export function SWProvider({ children }) {
  const [tasks, taskActions ]= useReducer(TaskReducer, []);
  
  return (
    <SWContext.Provider value={{tasks, taskActions }}>{children}</SWContext.Provider>
  );
}

export default SWContext;
