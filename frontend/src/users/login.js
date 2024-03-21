import { useContext, useState } from "react"
import { useHistory } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser"

function LoginForm() {

    const history = useHistory()

    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password_digest: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/authentication/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            setCurrentUser(data.user)
            localStorage.setItem('token', data.token)
            history.push(`/todolist`)
        } else {
            setErrorMessage(data.message)
        }
    }

    return (
        <main>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password_digest}
                            onChange={e => setCredentials({ ...credentials, password_digest: e.target.value })}
                            className="form-control"
                            id="password_digest"
                            name="password_digest"
                        />
                    </div>
                </div>
                <input className="button" type="submit" value="Login" />
            </form>
        </main>
    )
}

export default LoginForm