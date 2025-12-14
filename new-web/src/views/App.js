import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
import MyComponent from './example/myComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * 
 * 2 component: class component/ function component( function , arrow)
 *  (function App() / const App =() ==>  )
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple TODO Apps with FUNYCOSY
        </p>
        <ListTodo></ListTodo>
        {/* <MyComponent></MyComponent> */}
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
}

export default App;
