import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { estudianteReducer } from './reducers/estudianteReducer';

let reducers = combineReducers({estudianteReducer})

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunkMiddleware)
));
  
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') 
);
