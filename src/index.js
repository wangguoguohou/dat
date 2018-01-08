import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers/reducers'
import Router from './routers/Router';
import registerServiceWorker from './registerServiceWorker';
// import Page1Reducer from './containers/Page1/reducer/Page1'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render((
    <Provider store={store}>
        <Router />
    </Provider>
    // <Router />
), document.getElementById('root'));
registerServiceWorker();
