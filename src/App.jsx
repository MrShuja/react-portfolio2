import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import People from "./components/People/People";
import Experties from "./components/expertise/Experties";
import Hero from './components/hero/Hero';
import Potfolio from "./components/potfolio/Potfolio";
import Works from './components/works/Works';

const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary {css.container}`}>
    <Header />
    <Hero/>
    <Experties/>
    <Works/>
    <Potfolio />
    <People />
    <Footer />
  
  </div>
  )  
};

export default App;
