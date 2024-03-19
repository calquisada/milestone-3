import LoginForm from '../users/login'

function LogInForm() {
    return (
        <body>
            <div className="App">
                <header>
                    <h1>To Do List</h1>
                    <h2>Login to access your individual to do lists!</h2>
                    <h3>Not signed up?</h3>
                    <button className='button'>Sign Up Now</button>
                </header>
                <LoginForm />
            </div>
        </body>
    );
}

export default LogInForm;