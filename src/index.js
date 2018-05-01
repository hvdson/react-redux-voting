import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import myApp from './reducers'
import Results from './components/Results'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(myApp);
console.log(store)
function render() {
  ReactDOM.render(
    <div className="container">
      <App store={store}/>
      <br />
      <Results store={store}/>
    </div>
    ,
    document.getElementById('root')
  );
  registerServiceWorker();
}

store.subscribe(render);

render();