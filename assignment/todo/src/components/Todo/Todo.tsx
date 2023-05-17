import { Button, CloseButton, Form, ProgressBar, Badge } from "solid-bootstrap";
import { Component, createSignal } from "solid-js";
import { Buttons, TodoContainer } from "./Todo.styles";
import { useNavigate } from "@solidjs/router";
import { editTodo } from "../../api/todosApi";

interface TodoProps {
    id: string;
    task: string;
    done: boolean;
    progress: number;
    deadline: string;
    onDelete: (id: string) => void;
}

const handleCheckbox = async (id: string, data: {task: string, deadline: string, done: boolean, progress: number }) => {
    data.done = !data.done
    await editTodo(id, data)
}

const Todo: Component<TodoProps> = ({ id, task, done, progress, deadline, onDelete}) => {
    const navigate = useNavigate();

    return (
        <TodoContainer>
            <Form.Check type={"checkbox"} checked={done} onclick={() => handleCheckbox(id, {task, done, progress, deadline})}/>
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
