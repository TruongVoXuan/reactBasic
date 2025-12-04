import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/myComponent';
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
          Hello FUNYCOSY
        </p>

        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;
