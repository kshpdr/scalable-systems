import {Component, For} from 'solid-js'
import Todo from '../../components/Todo/Todo.jsx';
import {tasks} from '../../tasks.js'
import { Button } from 'solid-bootstrap';
import { AddButton } from './Homepage.styles.jsx';

const Homepage: Component<{}> = () => {
    return (
        <>
            <For each={tasks}>{(task) => 
                <Todo content={task} />
            }
            </For>
            <AddButton>
                <Button variant="primary" size="lg" href='/new'>Add new todo</Button>
            </AddButton>
        </>
    );
};

export default Homepage;
