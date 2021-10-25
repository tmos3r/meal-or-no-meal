import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./layout";
import Recipes from "./pages/recipes";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Recipes />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
