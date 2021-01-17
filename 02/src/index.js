import React from 'react';
import ReactDOM from 'react-dom';
import { data } from './data';
import UsersList from './components/UsersList';
import Header from './components/Header';

const App = () => (
  <>
    <Header>The users:</Header>
    <UsersList data={data}/>
  </>
);


ReactDOM.render(<App/>, document.getElementById('app'));
