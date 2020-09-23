import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import App from './App';

/* 
  Provider是最高的组件，因此应该将其包裹在BrowserRouter之外，然后将store传过去
*/

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</Provider>
, document.getElementById('root'));
