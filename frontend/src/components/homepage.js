import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function ToDoIndex(data) {

	const history = useHistory()
	
	const [todo, setTodos] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/todo`)
			const resData = await response.json()
			setTodos(resData)
		}
		fetchData()
	}, [])

	let todosFormatted = todo.map((todo) => {
		return (
			<div className="card" key={todo.id}>
				<h2>
					<a href="/#" onClick={() => history.push(`/todo/${todo.id}`)} >
						{todo.listname}
					</a>
				</h2>
				<ul>
					<li>{todo.listitem1}</li>
                    <li>{todo.listitem2}</li>
                    <li>{todo.listitem3}</li>
                    <li>{todo.listitem4}</li>
                    <li>{todo.listitem5}</li>
				</ul>
			</div>
		)
	})
	return (
		<main>
			<h1>To Do Lists</h1>
			<div className="row">
				{todosFormatted}
			</div>
			<button className='button' href="/#" onClick={() => history.push("/todo/new")}>Add your own list</button>
		</main>
	)
}

export default ToDoIndex;