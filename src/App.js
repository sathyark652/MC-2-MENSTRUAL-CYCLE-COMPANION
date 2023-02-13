
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./screens/Home";
import Symptom from "./screens/symptoms";
import Education from "./screens/education";
import Reels from "./screens/Reels";
import AboutFood from "./screens/AboutFood";
import Food from "./screens/food";
import Exercise from ".//screens/exercise"
import Product from "./screens/product";
import Map from "./screens/maps";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/symptoms" element={<Symptom/>}/>
        <Route exact path="/education" element={<Education/>}/>
        <Route exact path="/reels" element={<Reels/>}/>
        <Route exact path="/aboutfood" element={<AboutFood/>}/>

        <Route exact path="/food/" element={<Food/>}/>
        <Route exact path="/exercise" element={<Exercise/>}/>


        <Route exact path="/maps" element={<Map/>}/>
        <Route exact path="/products" element={<Product/>}/>
        
      </Routes>
  </Router>
  );
}

export default App;
