// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// // import StoreContextProvider from './Context/StoreContext';
// import StoreContextProvider from "./Components/Context/StoreContext";


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <StoreContextProvider>
//       <App />
//     </StoreContextProvider>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StoreContextProvider from './Components/Context/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
