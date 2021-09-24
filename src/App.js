import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import PrimarySearchAppBar from './Components/Homepage.js/Searchappbar';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Links from './Components/Homepage.js/Footerlinks';


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
        <Route path={process.env.PUBLIC_URL + '/Login'}  > <Login/> </Route>
      </Switch>

      <footer className="App-footer">
      <Links/>
      </footer>
    </div>
  );
}

export default App;
