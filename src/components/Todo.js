import React from "react"
import style from "../components/Todo.css"

const Todo = (props) => {
    return
    <div className={style.Todo}>
        <li>{props.content.text}</li>
        <span onClick={()=>props.remove(props.content.id)}>x</span>
    </div>
}

export default Todo