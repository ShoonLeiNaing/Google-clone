
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/search' >
            <h1>This is Search Page</h1>
          </Route>
          <Route path='/' >
            <Home/>
          
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
