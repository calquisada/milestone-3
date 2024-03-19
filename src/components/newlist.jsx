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

		await fetch(`http://localhost:3000/todolist`, {
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
            {/* code for new lists */}
        </main>
	)
}

export default NewList