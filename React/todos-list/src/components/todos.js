import React from 'react'
import TodoItem from './todoItem'

export default function Todos(props) {
  return (
    <>
    <div className='container p-5'>
      
    {props.todos.map((todoItem) => {
        return (
          <TodoItem key={todoItem.Sno} todoItem={todoItem} todoDelete={props.todoDelete}/>
        );
      })}
    </div>
    </>
  )
}
