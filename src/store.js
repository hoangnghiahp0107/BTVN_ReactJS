import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducer"
import countReducer from "./reducers/countReducer"
import rapfilmReducer from "./reducers/rapfilmReducer";

const store = configureStore({
    reducer: {
      countReducer: countReducer,
      todoReducer,
      rapfilmReducer,
    },
  });
  
  export default store;