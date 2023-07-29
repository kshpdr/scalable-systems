import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Datacenters from './pages/Datacenters/Datacenters';
import Jobs from './pages/Jobs/Jobs';
import { Layout } from './components/Layout/Layout.styles';
import { Content } from './pages/Datacenters/Datacenters.styles';
import Authors from './pages/Authors/Authors';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Layout>
          
          <Content>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/datacenters">
                <Datacenters />
              </Route>
              <Route path="/jobs">
                <Jobs />
              </Route>
              <Route path="/about">
                <Authors />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
