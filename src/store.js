import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
// import reducers from './reducers/reducers';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  {router: [],
  posts: ["blah blah"]},
  applyMiddleware(middleware)
)

export default store
