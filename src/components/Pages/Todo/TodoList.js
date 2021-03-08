import { MdDone, MdDelete} from 'react-icons/md';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({descripcion, id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(id);
  }

  const myClass = (completed)?"striked": "";
  return (
    <li className="flex  justify-items-cente text-center border font-mono">
    <section className="text-4xl w-full m-2">
      <span className={myClass}  >{descripcion}</span>
    </section>
    <section className="flex 0  m-1  ">
      <MdDone onClick={onClick} size={"3rem"} className="rounded border mx-1 bg-blue-500 hover:bg-blue-400"  ></MdDone>
      <MdDelete onClick={onDeleteClick}size={"3rem"} className="rounded border bg-red-500 hover:bg-red-400"></MdDelete>
    </section>
  </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
        key={o.doneHandlerid}
        descripcion={o.description}
        id={o.id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList ">
      <ul >
         {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;
