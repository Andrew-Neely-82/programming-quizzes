import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Java, Javascript } from "./pages/export";
import { Navbar, Footer } from "./components/export.js";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <div className="App_">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Java" component={Java} />
            <Route exact path="/Javascript" component={Javascript} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
