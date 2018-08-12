import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableTransactionTable from './FilterableTransactionTable';
import registerServiceWorker from './registerServiceWorker';
import data from './data.json';

  
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <FilterableTransactionTable transactions={data.transactions} />,
    document.getElementById('container')
  );
  
registerServiceWorker();
