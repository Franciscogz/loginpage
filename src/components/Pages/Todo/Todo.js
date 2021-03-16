import {useState, useEffect} from 'react';

import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import "./TodoList.css";

import firebaseSDK from '../../../FireBaseInit';

function Todo(){
  const [todoData, setTodoData] = useState({
    todos:[],
    newTodo:""
  });

  useEffect(
    ()=>{
      const todosRef = firebaseSDK.database().ref('todos').orderByKey().limitToLast(100);
      todosRef.on('value', (snapshot)=>{
        const fb_todos = snapshot.val();
        const newTodos = [];
        for (let fb_id in fb_todos) {
          newTodos.push({...fb_todos[fb_id], fb_id});
        }
        setTodoData({...todoData, todos: newTodos});

      });
      return ()=>{
        console.log("UnMounting");
        todosRef.off();
      }
    },

    []
  );

  const onChange = (e)=>{
    const {value} = e.currentTarget;
    setTodoData({...todoData, newTodo: value});
  };
  const onAddNew = (e)=>{
    let newToo = {
      description: todoData.newTodo,
      completed:false,
      id : new Date().getTime()
    };
    firebaseSDK.database().ref("todos").push(newToo);
  }
  const doneHandler = (id)=>{
    const ref = firebaseSDK.database().ref("todos")
    const fbTodo = ref.child(id);
    const lcTodo = todoData.todos.find( (o)=>{
      return o.fb_id === id;
    });
    fbTodo.update({
      "completed": !lcTodo.completed
    });

  };
  const deleteHandler = (id)=>{
    if (!todoData.waiting){
      const ref = firebaseSDK.database().ref("todos")
      const fbTodo = ref.child(id);
      fbTodo.remove();
    }
  }
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
