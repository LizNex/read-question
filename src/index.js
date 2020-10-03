import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './layout/index/index';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import routeConfig from "./config/route"


ReactDOM.render(
  <React.StrictMode>
      <Router>

    <Layout>
        <Switch>
          {routeConfig.map(c=>{
            return <Route key={c.path} path={c.path} component={c.component}></Route>
          })}  
        </Switch>  
    </Layout>
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();