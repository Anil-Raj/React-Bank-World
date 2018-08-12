import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableProductTable from './FilterableProductTable';
import registerServiceWorker from './registerServiceWorker';
import data from './data.json';

  
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <FilterableProductTable transactions={data.transactions} />,
    document.getElementById('container')
  );
  
registerServiceWorker();
