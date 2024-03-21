import { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser";

function TodoListShow() {

	const { id } = useParams()

	const history = useHistory()

	const { currentUser } = useContext(CurrentUser)

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