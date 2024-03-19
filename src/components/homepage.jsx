import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function ToDoIndex(data) {

	const history = useHistory()
	
	const [todo, setTodos] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/todolist`)
			const resData = await response.json()
			setTodos(resData)
		}
		fetchData()
	}, [])

	let todosFormatted = todo.map((todolist) => {
		return (
			<div className="col-sm-6" key={todolist.TodolistId}>
				<h2>
					<a href="#" onClick={() => history.push(`/todolist/${todolist.TodolistId}`)} >
						{todolist.listname}
					</a>
				</h2>
				<p className="text-center">
					{todolist.listitem1}
                    {todolist.listitem2}
                    {todolist.listitem3}
                    {todolist.listitem4}
                    {todolist.listitem5}
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