import './App.css';
import Reg from './Vk/Reg.js'
import Search from './Vk/Search.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>VK Api + React</h3>
      <Reg></Reg>
      <input type="password" placeholder="Вставьте токен"></input>
        <Search></Search>
      </header>
    </div>
  );
}

export default App;
