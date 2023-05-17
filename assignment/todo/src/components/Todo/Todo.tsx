import { Button, CloseButton, Form, ProgressBar, Badge } from "solid-bootstrap";
import { Component, createSignal } from "solid-js";
import { Buttons, TodoContainer } from "./Todo.styles";
import { useNavigate } from "@solidjs/router";

interface TodoProps {
    id: string;
    task: string;
    done: boolean;
    progress: number;
    deadline: string;
    onDelete: (id: string) => void;
}

const Todo: Component<TodoProps> = ({ id, task, done, progress, deadline, onDelete}) => {
    const navigate = useNavigate();

    return (
        <TodoContainer>
            <Form.Check type={"checkbox"} checked={done}/>
            {task}
            <ProgressBar now={10} label={`${progress}%`} style={{ width: "350px" }} />
            <Badge pill bg="primary">{deadline}</Badge>
            <Buttons>
                <Button onClick={() => navigate(`/edit/${id}`)}>Edit</Button>
                <CloseButton onClick={() => onDelete(id)} />
            </Buttons>
        </TodoContainer>
    )
}

export default Todo;
