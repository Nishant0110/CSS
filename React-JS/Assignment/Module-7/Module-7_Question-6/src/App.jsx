import React from 'react';
import { Provider } from 'react-redux';
import store from './assets/Comps/Reducer/Store';
import Login from './assets/Comps/Login';
import Register from './assets/Comps/Register/Register';
import List from './List';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Authentication & CRUD</h1>
        <Login />
        <Register />
        <List />
      </div>
    </Provider>
  );
}

export default App;