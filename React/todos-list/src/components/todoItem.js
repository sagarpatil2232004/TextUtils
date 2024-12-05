import React from 'react'



export default function TodoItem(props) {
const btnStyle = {
    width:'max-content'
}
  return (
    <>
    
    <h2>{props.todoItem.Title}</h2>
    <p>{props.todoItem.Desc}</p>
    <button className='btn btn-danger btn-sm' style={btnStyle} onClick={()=>{props.todoDelete(props.todoItem)}}>Delete</button>
    <hr/>
    </>
  )
}
