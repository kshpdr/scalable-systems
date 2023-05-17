import {Component, createEffect, createSignal, onMount} from 'solid-js'
import {Button, Form} from 'solid-bootstrap'
import { SubmitButton } from './Edit.styles'
import { useNavigate, useParams } from "@solidjs/router";
import { editTodo, getTodo } from '../../api/todosApi';
import Todo from '../../components/Todo/Todo';

const Edit: Component<{}> = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [task, setTask] = createSignal("");
    const [dueDate, setDueDate] = createSignal("");
    const [progress, setProgress] = createSignal(0);
    const [done, setDone] = createSignal(false);

    onMount(async () => {
      const todo = await getTodo(params.id);
      setTask(todo.task);
      setDueDate(todo.deadline);
      setProgress(todo.progress);
      setDone(todo.done);
    });

    const handleSubmit = async (e: Event) => {
      e.preventDefault();
  
      const data = {
        task: task(),
        deadline: dueDate(),
        progress: progress(),
        done: done()
      };
  
      await editTodo(params.id, data);
      navigate("/");
    };

    return (
        <>
            {/* <Todo {...{id: params.id, task: task(), deadline: dueDate(), progress: progress(), done: done(), onDelete: null}}/> */}
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
                    <Form.Control type='number' value={progress()} onInput={(e: InputEvent) => setProgress(Number((e.target as HTMLInputElement).value))}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Done: </Form.Label>
                    <Form.Control type='checkbox' checked={done()} onInput={(e: InputEvent) => setDone((e.target as HTMLInputElement).checked)}/>
                </Form.Group>
                <SubmitButton>
                    <Button type="submit">Submit</Button>
                </SubmitButton>
            </Form>
        </>
    )
};

export default Edit;
