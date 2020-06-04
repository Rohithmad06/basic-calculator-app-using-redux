import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, combineReducers} from 'redux';
import App from './App';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
const rootReducer = combineReducers({
    counter: counterReducer,
    results: resultsReducer
})
const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
