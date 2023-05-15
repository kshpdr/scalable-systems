import {Component, For, createResource} from 'solid-js'
import Todo from '../../components/Todo/Todo.jsx';
import {tasks} from '../../tasks.js'
import { Button } from 'solid-bootstrap';
import { AddButton } from './Homepage.styles.jsx';
import { getAllTodos } from '../../api/todosApi';

const Homepage: Component<{}> = () => {
    const [todos] = createResource(getAllTodos);

    return (
        <>
            <For each={todos()}>{(task) =>
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
