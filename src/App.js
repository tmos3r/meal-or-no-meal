import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./layout";
import Recipes from "./pages/recipes";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Recipes />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
