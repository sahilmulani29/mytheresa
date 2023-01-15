import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './src/App';
import { AppContextProvider } from './src/context/app-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // Wrapped application under context to make it avaiable globally
  <AppContextProvider>
    {/* Wrapped application under router to make it avaiable globally */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextProvider>,
);
