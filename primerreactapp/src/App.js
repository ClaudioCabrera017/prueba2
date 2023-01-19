
import './App.css';
import Inversion from './Inversion';
function App() {
  return (
    <div className="App">
      <Inversion firstName="John" lastName="Smith" age={8} hairColor={"Brown"}/> 
      <Inversion firstName="Bruce" lastName="Wayne" age={60} hairColor={"Green"}/> 
      <Inversion firstName="Carol" lastName="Sosa" age={55} hairColor={"Red"}/> 
      <Inversion firstName="Carlos" lastName="Rojas" age={70} hairColor={"Yellow"}/> 
    </div>
  );
}

export default App;
