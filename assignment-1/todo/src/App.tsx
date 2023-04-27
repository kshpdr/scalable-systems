import { Component, For } from 'solid-js';
import { tasks } from './tasks.js';
import Layout from './components/Layout/Layout';
import Todo from './components/Todo/Todo';
import { CloseButton, Collapse } from 'solid-bootstrap';
import {A} from '@solidjs/router'

const App: Component<{}> = () => {
  return (
    <Layout headerContent={"Your best TODO app"}>
      <For each={tasks}>{(task) => 
        <Todo content={task} />
      }
      </For>
    </Layout>
  );
};

export default App;
