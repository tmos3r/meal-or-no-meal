import React, { Fragment } from 'react';

import Layout from './layout/Layout';
import Home from './components/home/Home';

import './layout/styles/all.css';

const App = () => {
  return (
    <Fragment>
      <Layout />
      <div className="content">
        <Home />
      </div>
    </Fragment>

  );
}

export default App;
