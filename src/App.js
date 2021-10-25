import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./layout";
import Recipes from "./pages/recipes";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/meal-or-no-meal">
            <Recipes />
          </Route>
          <Route path="/meal-or-no-meal/recipes">
            <Recipes />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
