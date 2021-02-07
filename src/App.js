import './App.css';
// import TodoList from "./redux-thunk/components/TodoList.js"
// import TodoList from "./redux/components/TodoList.js"
import TodoList from "./react-redux/components/TodoList.js";
import { Provider } from "react-redux";
import store from './react-redux/store'
function App() {
  return (
      <Provider store={store}>
        <div className="App">
        <TodoList/>
        </div>
      </Provider>
  );
}

export default App;
