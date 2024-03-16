import './App.css';
import LoginForm from './components/loginpage'

function App() {
  return (
    <body>
      <div className="App">
        <header>
          <h1>To Do List</h1>
          <h2>Login to access your individual to do lists!</h2>
        </header>
        <main>
          <LoginForm />
        </main>
      </div>
    </body>
  );
}

export default App;
