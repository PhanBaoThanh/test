import { useState } from "react";
import {TodoListContext} from './Context/TodoListContext'
import Input from "./components/Input/Input";
import List from "./components/List/List";
import './app.scss'
function App() {
  const [list,setList] = useState([])
  const [id,setId] = useState(0)
  return (
    <TodoListContext.Provider
      value={{
        list,
        setList,
        id,
        setId
      }}
    >
      <div className="App">
        <div className="box">
          <Input />
          <List />
        </div>
      </div>
    </TodoListContext.Provider>
  );
}

export default App;
