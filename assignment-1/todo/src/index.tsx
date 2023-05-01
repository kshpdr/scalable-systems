/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, Routes, A } from '@solidjs/router'

import './index.css';
import App from './App';
import New from './components/Pages/New';
import Edit from './components/Pages/Edit';
import Homepage from './components/Pages/Homepage';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => 
  <Router>
    <App />
  </Router>
, root!);
