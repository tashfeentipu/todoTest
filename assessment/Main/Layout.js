import React from "react";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import TodoReducer from "./store/TodoReducer";

import MainNavigator from "./navigation/navigator";

const rootReducer = combineReducers({
  todoReducer: TodoReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
