import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path= "/" exact component= {HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
