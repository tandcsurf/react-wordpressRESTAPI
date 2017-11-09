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
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, push } from 'react-router-redux';
import { Provider } from 'react-redux';
import store from './store';
import GetData from './scripts/GetData.js';
import SamplePage from './components/SamplePage.js';
import SamplePage2 from './components/SamplePage2.js';
import Header from './components/Header.js';


class AppInit {

  components = {
    'sample-page': SamplePage,
    'sample-page-number-2': SamplePage2
  }


  buildRoutes(data) {
    console.log(data, "data in buildRoutes");
    return data.pages.map((page, i) => {
      console.log(page.slug)
      let Component = this.components[page.slug]
      console.log(Component, "this.components")
      return(
      <Route key={i} render={() => { return (< Component {...data} page={page} />)}} path={`/${page.slug}`} exact />
      )
    })
  }

  run() {
    let history = createHistory();
    console.log(store);
    GetData.getPages((response) => {
      console.log(response, "response in index.js")
      ReactDOM.render(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
            <Header pages={response.pages}/>

              <Switch>
                <Route exact path="/" render={() => <App /> } />
                {this.buildRoutes(response)}
                <Route render={() => { return <Redirect to="/" />}} />
              </Switch>
            </div>
          </ConnectedRouter>
        </Provider>

        , document.getElementById('root')
      );
    });
  }
}

registerServiceWorker();

new AppInit().run();
