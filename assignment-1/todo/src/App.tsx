import { Component, For } from 'solid-js';
import { tasks } from './tasks.js';
import Layout from './components/Layout/Layout';
import Todo from './components/Todo/Todo';
import {Router, Routes, Route} from '@solidjs/router'
import { CloseButton, Collapse } from 'solid-bootstrap';
import New from './components/Pages/New' 
import Edit from './components/Pages/Edit'
import Homepage from './components/Pages/Homepage.jsx';
import About from './components/Pages/About'
 
const App: Component<{}> = () => {
  return (
        <Routes>
          <Route path='/' component={Homepage} />
          <Route path='/new' component={New}/>
          <Route path='/edit' component={Edit}/>
          <Route path='/about' component={About}/>
        </Routes>
  );
};

export default App;
