import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"

function TodoListShow() {

	const { TodolistId } = useParams()

	const history = useNavigate()

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

	return (
		<main>
			<h1>test</h1>
			{/* show list code */}
		</main>
	)
}

export default TodoListShow