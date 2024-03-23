import LoginForm from './users/login'
import { useHistory } from "react-router";



function LogInForm() {
    const history = useHistory()

    return (
        <main>
            <div className="App">
                <header>
                    <h1>To Do List</h1>
                    <h2>Login to access your individual to do lists!</h2>
                    <h3>Not signed up?</h3>
                    <button className='button' href="/#" onClick={() => history.push("/signup")}>Sign Up Now</button>
                </header>
                <LoginForm />
            </div>
        </main>
    );
}

export default LogInForm;