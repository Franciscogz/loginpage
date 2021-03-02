import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import CardHolder from "./components/Cards/CardHolder";
import BrandHeader from './components/BrandHeader/BrandHeader';
import Login from './components/Login/Login'
function App() {
  return (
    <section className="h-screen bg-yellow-50">
      <BrandHeader></BrandHeader>

      <CardHolder>
        <Cards></Cards>

      </CardHolder>
    </section>
  );
}

export default App;
