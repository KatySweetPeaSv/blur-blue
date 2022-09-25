import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardGrid from './components/card-grid/CardGrid';
import ProductPage from './pages/ProductPage';
import CheckoutFullPage from './pages/CheckoutFullPage';
import NewProductForm from './components/NewProductForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <CardGrid />
        </Route>
        <Route exact path="/figure/:id">
          <ProductPage />
        </Route>
        <Route path="/checkout" component={CheckoutFullPage} />
        <Route path="/register" component={NewProductForm} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
