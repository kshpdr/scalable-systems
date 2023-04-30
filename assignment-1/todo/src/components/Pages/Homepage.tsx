import {Component, For} from 'solid-js'
import Todo from '../Todo/Todo'
import {tasks} from '../../tasks.js'
import Layout from '../Layout/Layout'

const Homepage: Component<{}> = () => {
    return (
        <Layout headerContent='Your best TODO app'>
            <For each={tasks}>{(task) => 
                <Todo content={task} />
            }
            </For>
        </Layout>
    );
};

export default Homepage;
