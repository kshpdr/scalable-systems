import { Component, createSignal } from 'solid-js';
import { Button, Form } from 'solid-bootstrap';
import { SubmitButton } from './New.styles';
import { createTodo } from '../../api/todosApi';
import { useNavigate } from "@solidjs/router";

const New: Component<{}> = () => {
  const navigate = useNavigate();
  const [task, setTask] = createSignal<string>("");
  const [dueDate, setDueDate] = createSignal<string>("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    const data = {
      task: task(),
      deadline: dueDate(),
    };

    const record = await createTodo(data);
    console.log('Record created:', record);
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Your new TODO</Form.Label>
        <Form.Control type='text' value={task()} onInput={(e: InputEvent) => setTask((e.target as HTMLInputElement).value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Due to: </Form.Label>
        <Form.Control type='date' value={dueDate()} onInput={(e: InputEvent) => setDueDate((e.target as HTMLInputElement).value)} />
      </Form.Group>
      <SubmitButton>
        <Button type="submit">Submit</Button>
      </SubmitButton>
    </Form>
  );
};

export default New;
