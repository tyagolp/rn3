import React from 'react';
import { Provider } from 'react-redux';

import store from '~/store';
import TodoList from './TodoList';

import './config/ReactotronConfig';
import './config/DevToolsConfig';
// import Routes from './routes';

// const App = () => <Routes />;

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
