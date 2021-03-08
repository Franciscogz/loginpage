import {useState} from 'react';

import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import "./TodoList.css";

function Todo(){
  const [todoData, setTodoData] = useState({
    todos:[],
    newTodo:"",
  });
  const onChange = (e)=>{
    const {name, value} = e.currentTarget;
    setTodoData({...todoData, newTodo: value});
  };
  const onAddNew = (e)=>{
    let newToo = {
      description: todoData.newTodo,
      completed:false,
      id : new Date().getTime()
    };
    let newTodos = todoData.todos;
    newTodos.push(newToo);

    setTodoData({todos:newTodos, newTodo: ""});
  }
  const doneHandler = (id)=>{
    const newTodos = todoData.todos.map((o)=>{
      if(o.id == id){
        o.completed = !o.completed;
      }
      return o;
    });

    setTodoData({...todoData, todos:newTodos});
  };
  const deleteHandler = (id)=>{
    const newTodos = todoData.todos.filter((o) => {
      return o.id !==id;
    });

    setTodoData({ ...todoData, todos: newTodos });
  }
  const tmpTodos = todoData.todos.map( (o)=>{return JSON.stringify(o)} ).join(" | ");
  return (
    <section className=" w-full mx-1 lg:w-1/3 lg:mx-auto lg:my-40 mt-20 border-8 border-double border-gray-200 bg-yellow-700 bg-opacity-40">
     <NewTodo
      onChange={onChange}
      value={todoData.newTodo}
      onAddNew={onAddNew}
     >
     </NewTodo>
      <TodoList
        todos={todoData.todos}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      ></TodoList>
    </section>
  )
}

export default Todo;
