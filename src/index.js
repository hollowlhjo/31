import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './App';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <Chat />
  </ErrorBoundary>,
  document.getElementById('root')
);