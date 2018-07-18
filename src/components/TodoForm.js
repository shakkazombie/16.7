import React from "react";
import style from "../components/TodoForm.css";

const TodoForm = (props) => (
    <form onSubmit={props.submit}>
        <input type="text" value={props.value} onChange={(e) => props.fill(e)} placeholder="Task" />
        <button type="submit" className="submit" value="Submit">Submit</button>
    </form>
)

export default TodoForm