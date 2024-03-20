import { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser";

function TodoListShow() {

	const { TodolistId } = useParams()

	const history = useHistory()

	const { currentUser } = useContext(CurrentUser)

	const [todo, setTodo] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/todolist/${TodolistId}`)
			const resData = await response.json()
			setTodo(resData)
		}
		fetchData()
	}, [TodolistId])

	function editToDoList() {
		history.push(`/todolist/${todo.TodolistId}/edit`)
	}

	async function deleteToDoList() {
		await fetch(`http://localhost:5000/todolist/${todo.TodolistId}`, {
			method: 'DELETE'
		})
		history.push('/todolist')
    }

	let listActions = null

	if (currentUser?.role === 'admin') {
		listActions = (
			<>
				<button className="btn btn-warning" onClick={editToDoList}>
					Edit
				</button>{` `}
				<button type="submit" className="btn btn-danger" onClick={deleteToDoList}>
					Delete
				</button>
			</>
		)
	}

	return (
		<main>
			<div className="row">
				<div className="col-sm-6">
					<h1>{todo.listname}</h1>
					<ul>
						<li>
							{todo.listitem1}
							{todo.listitem2}
							{todo.listitem3}
							{todo.listitem4}
							{todo.listitem5}
						</li>
					</ul>
					{listActions}
				</div>
			</div>
		</main>
	)
}

export default TodoListShow