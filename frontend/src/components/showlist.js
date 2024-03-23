import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router"

function TodoListShow() {

	const { id } = useParams()

	const history = useHistory()

	const [todo, setTodo] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/todo/${id}`)
			const resData = await response.json()
			setTodo(resData)
		}
		fetchData()
	}, [id])
	
	if (todo==null){
		return <h1>Loading</h1>
	}

	function editToDoList() {
		history.push(`/todo/${todo.id}/edit`)
	}

	async function deleteToDoList() {
		await fetch(`http://localhost:5000/todo/${todo.id}`, {
			method: 'DELETE'
		})
		history.push('/todo')
    }

	return (
		<main>
			<div className="row">
				<div>
					<h1>{todo.listname}</h1>
					<ul>
						<li>{todo.listitem1}</li>
						<li>{todo.listitem2}</li>
						<li>{todo.listitem3}</li>
						<li>{todo.listitem4}</li>
						<li>{todo.listitem5}</li>
					</ul>
					<button className="btn btn-warning" onClick={editToDoList}>
						Edit
					</button>{` `}
					<button type="submit" className="btn btn-danger" onClick={deleteToDoList}>
						Delete
					</button>
				</div>
			</div>
		</main>
	)
}

export default TodoListShow