import logo from './logo.svg';
import './App.css';
import Employee from './Component/Employee';
import Team from './Component/Team';

function App() {
  return (
    <div className="App" style={{display:'flex'}}>
      <Employee />
      <Team />
    </div>
  );
}

export default App;
