import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import GetData from './scripts/GetData.js';

class AppInit {


  buildRoutes(data) {
    console.log(data, "data in buildRoutes");
    return data.pages.map((page, i) => {
      console.log(page.slug)
      return(
      <Route key={i} component={ App } path={`/${page.slug}`} exact />
      )
    })
  }

  run() {
    GetData.getPages((response) => {
      console.log(response, "response in index.js")
      ReactDOM.render(
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={ App } />
              {this.buildRoutes(response)}
              <Route exact path="/hey" component={ App } />
              <Route render={() => { return <Redirect to="/" />}} />
            </Switch>
          </div>
        </Router>

        , document.getElementById('root')
      );
    });
  }
}

registerServiceWorker();

new AppInit().run();
