import { useState } from "react"
import { useHistory } from "react-router"

function NewList() {

	const history = useHistory()

	const [todo, setTodo] = useState({
		listname: '',
        listitem1: '',
        listitem2: '',
        listitem3: '',
        listitem4: '',
        listitem5: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/todolist`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(todo)
		})

		history.push('/todolist')
	}

	return (
		<main>
			<h1>Add a New List</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">To Do List Name</label>
					<input
						required
						value={todo.listname}
						onChange={e => setTodo({ ...todo, listname: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="listitem1">List Item #1</label>
					<input
						required
						value={todo.listitem1}
						onChange={e => setTodo({ ...todo, listitem1: e.target.value })}
						className="form-control"
						id="list1"
						name="list1"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="listitem2">List Item #2</label>
					<input
						required
						value={todo.listitem2}
						onChange={e => setTodo({ ...todo, listitem2: e.target.value })}
						className="form-control"
						id="list2"
						name="list2"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="listitem3">List Item #3</label>
					<input
						required
						value={todo.listitem3}
						onChange={e => setTodo({ ...todo, listitem3: e.target.value })}
						className="form-control"
						id="list3"
						name="list3"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="listitem4">List Item #4</label>
					<input
						required
						value={todo.listitem4}
						onChange={e => setTodo({ ...todo, listitem4: e.target.value })}
						className="form-control"
						id="list4"
						name="list4"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="listitem5">List Item #5</label>
					<input
						required
						value={todo.listitem5}
						onChange={e => setTodo({ ...todo, listitem5: e.target.value })}
						className="form-control"
						id="list5"
						name="list5"
					/>
				</div>
				<input className="button" type="submit" value="Add List" />
			</form>
        </main>
	)
}

export default NewList