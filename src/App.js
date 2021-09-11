import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import PrimarySearchAppBar from './Components/Jiomart components/Searchappbar';
import Signup from './Pages/Signup';


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
        <PrimarySearchAppBar />


      </header>

      {/* Router - Pages */}
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact > <Home /> </Route>
        <Route path={process.env.PUBLIC_URL + '/home'} > <Home /> </Route>
        <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery /> </Route>
        <Route path={process.env.PUBLIC_URL + '/signup'}  > <Signup /> </Route>
      </Switch>

      <footer className="App-footer">
        This is a footer
      </footer>
    </div>
  );
}

export default App;
