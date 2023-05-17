import {Component, For, createSignal, createEffect} from 'solid-js'
import Todo from '../../components/Todo/Todo.jsx';
import { Button } from 'solid-bootstrap';
import { AddButton } from './Homepage.styles.jsx';
import { getAllTodos } from '../../api/todosApi';
import { deleteTodo } from '../../api/todosApi';
import { useNavigate } from '@solidjs/router';

const Homepage: Component<{}> = () => {
    const [todos, setTodos] = createSignal([] as any[]);
    const navigate = useNavigate();

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
                <Button variant="primary" size="lg" onClick={() => navigate(`/new`)}>Add new todo</Button>
            </AddButton>
        </>
    );
};

export default Homepage;
