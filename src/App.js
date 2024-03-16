import './App.css';
import LogInForm from './components/loginpage'

function App() {
  return (
    <body>
      <div className="App">
        <header>
          <h1>To Do List</h1>
          <h2>Login to access your individual to do lists!</h2>
          <h3>Not signed up?</h3>
          <button className='button'>Sign Up Now</button>
        </header>
          <LogInForm />
      </div>
    </body>
  );
}

export default App;
