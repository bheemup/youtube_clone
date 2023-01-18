import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Provider} from "react-router-dom";
import { SearchContextProvider } from "./context/SearchContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <SearchContextProvider>
      <App />
      </SearchContextProvider>
    
    </Provider>
  </React.StrictMode>
)
