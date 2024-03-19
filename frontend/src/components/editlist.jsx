import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"

function EditList() {

	const history = useNavigate()

    const { TodolistId } = useParams()

    const [todo, setTodo] = useState({
		listname: '',
        listitem1: '',
        listitem2: '',
        listitem3: '',
        listitem4: '',
        listitem5: ''
	})

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/todolist/${TodolistId}`)
			const resData = await response.json()
			setTodo(resData)
		}
		fetchData()
	}, [ TodolistId ])

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/todolist/${todo.TodolistId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(todo)
		})

		history.push(`/todolist/${todo.TodolistId}`)
	}

	return (
		<main>
			<h1>test</h1>
			{/* Edit list code */}
        </main>
	)
}

export default EditList