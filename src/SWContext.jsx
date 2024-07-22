import { useReducer, createContext, useContext, useEffect } from "react";
import getData from "./components/getData";

const SWContext = createContext(null);

const TaskReducer = (state, action) => {
    
	switch (action.type) {
    case "add":
        if (state.find((task) => task.name == action.payload.name)) return state;
        return [...state, action.payload];
    case "remove":
        return state.filter((task) => task.url !== action.payload);
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
    }).then(() => {
        getData("planets").then((data) => {
            data.map((planet) => {
                taskActions({ type: "add", payload: planet });
            });
        });
    }).then(() => {
        getData("vehicles").then((data) => {
            data.map((vehicle) => {
                taskActions({ type: "add", payload: vehicle });
            });
        });
    })
  }, []);

  return (
    <SWContext.Provider value={{tasks, taskActions }}>{children}</SWContext.Provider>
  );
}

export default SWContext;
