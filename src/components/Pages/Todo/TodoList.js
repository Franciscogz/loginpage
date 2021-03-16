import { MdDone, MdDelete} from 'react-icons/md';

function TodoListItem({descripcion, id, fb_id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(fb_id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(fb_id);
  }

  const myClass = (completed)?"striked": "";
  return (
    <li className="flex  justify-items-cente text-center border font-mono">
    <section className="text-4xl w-full m-2">
      <span className={myClass}  >{descripcion}</span>
    </section>
    <section className="flex 0  m-1  ">
      <MdDone onClick={onClick} size={"3rem"} className="rounded border mx-1 bg-blue-500 hover:bg-blue-400 hover:text-indigo-50"  ></MdDone>
      <MdDelete onClick={onDeleteClick}size={"3rem"} className="rounded border bg-red-500 hover:bg-red-400 hover:text-indigo-50"></MdDelete>
    </section>
  </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
      key={o.id}
      descripcion={o.description}
      id={o.id}
      fb_id={o.fb_id}
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
