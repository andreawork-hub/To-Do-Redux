import { createRoot } from "react-dom/client";
import { addTodo, toggleTodo ,editTodo , deleteTodo } from './actions';
import MainView from "./components/main-view/main-view";

import { createStore } from 'redux';
import todos from './reducers';

import "./index.scss";

const store = createStore(todos);
console.log('Initial State', store.getState());

store.dispatch(addTodo('Make my bed'));
console.log('State after adding first todo', store.getState());

store.dispatch(addTodo('Morning hygene & get dressed'));
console.log('State after adding second todo', store.getState());

store.dispatch(addTodo('Shopping'));
console.log('State after adding third todo', store.getState());

store.dispatch(addTodo('Studding'));
console.log('State after adding last todo', store.getState());

store.dispatch(toggleTodo(0));
console.log('State after toggling first todo', store.getState());

store.dispatch(toggleTodo(2));
console.log('State after toggling third todo', store.getState()); 

store.dispatch(editTodo('Time for a coffee' , 2));
console.log('State after editing third todo', store.getState());

store.dispatch(deleteTodo(1));
console.log('State after deleteing second todo', store.getState());

function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);