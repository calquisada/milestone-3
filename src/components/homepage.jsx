import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function ToDoIndex(data) {

	const history = useHistory()
	
	const [todos, setTodos] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/todolist`)
			const resData = await response.json()
			setTodos(resData)
		}
		fetchData()
	}, [])

	let todosFormatted = todos.map((todo) => {
		return (
			<div className="col-sm-6" key={todo.todoId}>
				<h2>
					<a href="#" onClick={() => history.push(`/todos/${todo.todoId}`)} >
						{todo.name}
					</a>
				</h2>
				<p className="text-center">
					{todo.listitem1}
                    {todo.listitem2}
                    {todo.listitem3}
                    {todo.listitem4}
                    {todo.listitem5}
				</p>
			</div>
		)
	})
	return (
		<main>
			<h1>To Do Lists</h1>
			<div className="row">
				{todosFormatted}
			</div>
		</main>
	)
}

export default ToDoIndex;