import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { routes } from './routes';
import { Navbar } from './cmps/Navbar';

import './assets/styles/styles.scss';

//---------------------------------------------
//---------------------------------------------

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Navbar />
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </main>

      </div>
    </Router>
  );
}

export default App;
