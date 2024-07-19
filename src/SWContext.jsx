import { useReducer, createContext, useContext, useEffect } from "react";
import getData from "./components/getData";

const SWContext = createContext(null);

const TaskReducer = (state, action) => {
	switch (action.type) {
    case "add":
        state.map((task) => {
            if (task.url === action.payload.url) {
            return task;
            }
        });
        console.log(action.payload)
      return [...state, action.payload];
    case "remove":
      let newState=[...state]
		newState.splice(action.index, 1);
      return newState
    case "toggleFav":
        return state.map((task) => {
            if (task.url === action.payload) {
            return { ...task, isFavorite: !task.isFavorite };
            }
            return task;
        });
    default:
      return state;
  }
};

export function SWProvider({ children }) {
  const [tasks, taskActions ]= useReducer(TaskReducer, []);

  useEffect(() => {
    getData("people").then((data) => {
        data.map((person) => {
            taskActions({ type: "add", payload: person });
        });
    });
  }, []);

  return (
    <SWContext.Provider value={{tasks, taskActions }}>{children}</SWContext.Provider>
  );
}

export default SWContext;
