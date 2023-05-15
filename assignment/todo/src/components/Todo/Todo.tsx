import { Button, CloseButton, Form, ProgressBar, Badge } from "solid-bootstrap";
import { Component } from "solid-js";
import { Buttons, TodoContainer } from "./Todo.styles";

interface TodoProps {
    id: string;
    task: string;
    done: boolean;
    progress: number;
    deadline: string;
  }

const Todo: Component<TodoProps> = ({ id, task, done, progress, deadline }) => {
    return (
        <TodoContainer>
            <Form.Check type={"checkbox"} checked={done}/>
            {task}
            <ProgressBar now={10} label={`${progress}%`} style={{ width: "350px" }} />
            <Badge pill bg="primary">{deadline}</Badge>
            <Buttons>
                <Button href={`/edit/${id}`}>Edit</Button>
                <CloseButton />
            </Buttons>
        </TodoContainer>
    )
}

export default Todo;
