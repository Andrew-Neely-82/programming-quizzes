import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Java, Javascript } from "./pages/export";
import { Navbar, Footer } from "./components/export.js";
import "./App.scss";

function App() {
  return (
    <div className="App_">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Java" component={Java} />
          <Route exact path="/Javascript" component={Javascript} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
