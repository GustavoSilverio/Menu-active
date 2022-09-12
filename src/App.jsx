import './App.css';
import Name from './Components/Name/Name';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="container">
      <Name/>
      </div>
    </div>
  );
}

export default App;
