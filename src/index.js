import React from 'react';
import ReactDOM from 'react-dom/client';

// Añadimos Bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// !Importante: los estilos propios, deben de ir del bootstrap para que no los pise.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppReduxSaga from './AppReduxSaga';
//Redux Imports:
import { Provider } from 'react-redux';

// Import Config Function of App Store
import { createAppStore, createAppAsyncStore } from './store/config/storeConfig';

// We create the App Store
//let appStore = createAppStore()

let appAsyncStore = createAppAsyncStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
        {/*<App/>*/}
        <AppReduxSaga />
   {/*<AppRoutingOne/>*/}
   {/*<AppRoutingFinal />*/}
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
