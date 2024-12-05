import './App.css';
import Header from './components/header'
import Todos from './components/todos'
import Footer from './components/footer'
import Addtodos from './components/addtodos'
import About from './components/about'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  let initTodo;

  if (localStorage.getItem("todosList") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todosList"));
  }

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const [todosList, setTodos] = useState(initTodo || []);

  const todoDelete = (todoItem) => {
    console.log(todoItem);

    setTodos(
      todosList.filter((e) => {
        return e !== todoItem;
      })
    );
  };

  const addtodo = (Title, Desc) => {
    let Sno = todosList.length === 0 ? 1 : todosList[todosList.length - 1].Sno + 1;
    const myTodo = {
      Sno: Sno,
      Title: Title,
      Desc: Desc,
    };
    setTodos([...todosList, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todosList));
  }, [todosList]);

  return (

    <Router>
      <div style={appStyle}>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Addtodos addtodo={addtodo} />
                <Todos todos={todosList} todoDelete={todoDelete} />
              </>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;