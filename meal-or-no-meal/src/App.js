import React, { Fragment } from 'react';

import { HashRouter, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './components/home/Home';
import Meal from './components/meals/Meal';

import './layout/styles/all.css';

const App = () => {
  return (
    <Fragment>
      <Layout />
      <div className="content">
        <HashRouter basename='/'>
          <Route exact path="/" component={Home} />
          <Route exact path="/meals" component={Meal} /> 
        </HashRouter>
      </div>
    </Fragment>
  );
}

export default App;
