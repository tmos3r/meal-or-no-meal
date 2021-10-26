import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./layout";

import Home from "./pages/home";

import { menuOptions } from "./constants/menuOptions";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {menuOptions.map((x) => {
            return (
              <Route key={x.title} component={x.component} path={x.path} />
            );
          })}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
