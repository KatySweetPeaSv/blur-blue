import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";
import Checkout from "./components/Checkout";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Switch>
        <Route path="/" exact>
          <CardGrid />
        </Route>

        <Route exact path="/figure/:id" component={ProductPage} />

        <Route path="/checkout" component={Checkout} />
      </Switch>
    </>
  );
}

export default App;
