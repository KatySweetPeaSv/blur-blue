import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import Checkout from './components/Checkout';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
   <>
        <Navbar />
        <br /><br /><br /><br /><br />
        <Hero />
        <CardGrid />
        <Checkout />
        <br /><br /><br /><br /><br />
        <ProductDetails/>

    </>
    
  );
}

export default App;
