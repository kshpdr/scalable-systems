import {Component, For, createSignal, createEffect} from 'solid-js'
import Todo from '../../components/Todo/Todo.jsx';
import {tasks} from '../../tasks.js'
import { Button } from 'solid-bootstrap';
import { AddButton } from './Homepage.styles.jsx';
import { getAllTodos } from '../../api/todosApi';
import { deleteTodo, editTodo } from '../../api/todosApi';

const Homepage: Component<{}> = () => {
    const [todos, setTodos] = createSignal([] as any[]);
    

    createEffect(() => {
        const fetchData = async () => {
            const result = await getAllTodos();
            setTodos(result);
        };
        fetchData();
    });

    const handleDelete = async (id: string) => {
        await deleteTodo(id);
        setTodos(todos().filter(todo => todo.id !== id));
    };

    return (
        <>
            <For each={todos()}>{(todo) =>
                <Todo {...todo} onDelete={handleDelete} />
            }
            </For>
            <AddButton>
                <Button variant="primary" size="lg" href='/new'>Add new todo</Button>
            </AddButton>
        </>
    );
};

export default Homepage;
