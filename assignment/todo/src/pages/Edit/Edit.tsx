import {Component, createSignal} from 'solid-js'
import Layout from '../../components/Layout'
import {Button, Form} from 'solid-bootstrap'
import { SubmitButton } from './Edit.styles'
import { useParams } from "@solidjs/router";
import { editTodo, singleTodo } from '../../api/todosApi';
import Todo from '../../components/Todo/Todo';

const Edit: Component<{}> = () => {
    const params = useParams();
    const todo = singleTodo(params.id)
    console.log(todo.task)

    const [task, setTask] = createSignal<string>(todo.task);
    const [dueDate, setDueDate] = createSignal<string>(todo.deadline);
    const [progress, setProgress] = createSignal<string>(todo.progress);
    const [done, setDone] = createSignal<boolean>(todo.done);

    const handleSubmit = async (e: Event) => {
        e.preventDefault(); 

        const data = {
        task: task(),
        deadline: dueDate(),
        done: done(),
        progress: progress()
    };

    const record = await editTodo(params.id, data);
    console.log('Record edited:', record);
    };

    return (
        <>
            <Todo content={todo}/>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Edit your todo</Form.Label>
                    <Form.Control type='text' value={task()} onInput={(e: InputEvent) => setTask((e.target as HTMLInputElement).value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Due to: </Form.Label>
                    <Form.Control type='date' value={dueDate()} onInput={(e: InputEvent) => setDueDate((e.target as HTMLInputElement).value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Progress: </Form.Label>
                    <Form.Control type='number' value={progress()} onInput={(e: InputEvent) => setProgress((e.target as HTMLInputElement).value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Done: </Form.Label>
                    <Form.Control type='boolean' value={done()} onInput={(e: InputEvent) => setDueDate((e.target as HTMLInputElement).value)}/>
                </Form.Group>
            </Form>
            <SubmitButton>
                <Button>Submit</Button>
            </SubmitButton>
        </>
    )
};

export default Edit