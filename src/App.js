import React from 'react';
import {Provider} from 'react-redux';
import {
  Switch,
  Redirect,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import buildStore from './store';
import withDataAndHooks from './hoc/with-data-and-hooks';

import Layout from './components/layout';
import Homepage from './pages/homepage';
import Contribute from './pages/contribute';
import Project from './pages/project';

import './styled';

const store = buildStore();

export default () => (
  <Provider store={store}>
    <Router basename="/crowdfunding-platform" >
      <Layout>
        <Switch>
          <Route exact path="/" component={withDataAndHooks(Homepage)} />
          <Route exact path="/project/:projectId" component={withDataAndHooks(Project)} />
          <Route exact path="/project/:projectId/contribute" component={withDataAndHooks(Contribute)} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);
