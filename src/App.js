import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BrandHeader from './components/BrandHeader/BrandHeader';
import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";
import Todo from "./components/Pages/Todo/Todo";
//import Cards from './components/Cards/Cards';
//import CardHolder from "./components/Cards/CardHolder";

function App() {
  return (

    <Router>
      <section className="h-screen w-full fondo ">
        <BrandHeader></BrandHeader>
        <Switch>
          <Route path="/" exact>
            <div className="h-full">
              <Home></Home>
            </div>  
          </Route>
          <Route path="/todos" exact>
            <div className="h-full">
            <Todo></Todo>
            </div>
          </Route>
          <Route path="/login" exact>
             <div className="h-full">
            <Login></Login>
            </div>
          </Route> 
        </Switch>
      </section>
    </Router>
    
  );
}

export default App;
