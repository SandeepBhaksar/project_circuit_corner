import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-fdlok6zdyzdtlepp.us.auth0.com"
      clientId="bQA2v6JRKjahOhX4dljQcD6ievrCua2I"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
