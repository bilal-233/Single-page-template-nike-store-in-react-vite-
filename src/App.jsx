import HeroSection from "../public/components/hero";
import  "./App.css";
const App = () =>{
  return<div>
    <nav className="container">
      <div className="logo">
      <img src ="./public/photo/logo.png" alt="logo" />

      </div>
      <ul>
        <li href="#">Manu</li>
        <li href="#">Location</li>
        <li href="#">Contact</li>
        <li href="#">About</li>
      </ul>
      <button>Login</button>
    </nav>
   <HeroSection />
  </div>

};
export default App;
