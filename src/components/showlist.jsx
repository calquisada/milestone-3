import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router"

function TodoListShow() {

	const { TodolistId } = useParams()

	const history = useHistory()

	const [todo, setTodo] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/todolist/${TodolistId}`)
			const resData = await response.json()
			setTodo(resData)
		}
		fetchData()
	}, [TodolistId])

	function editToDoList() {
		history.push(`/todolist/${todo.TodolistId}/edit`)
	}

	async function deleteToDoList() {
		await fetch(`http://localhost:3000/todolist/${todo.TodolistId}`, {
			method: 'DELETE'
		})
		history.push('/todolist')
    }

	return (
		<main>
			{/* show list code */}
		</main>
	)
}

export default TodoListShow