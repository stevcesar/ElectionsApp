import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ElectionsApp } from './ElectionsApp.jsx'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {persistStore,} from "redux-persist";
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <ElectionsApp/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
