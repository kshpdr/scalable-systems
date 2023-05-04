import { Button, CloseButton, Form, ProgressBar, Badge } from "solid-bootstrap";
import { Component } from "solid-js";
import { Buttons, TodoContainer } from "./Todo.styles";

interface TodoProps {
    content: string;
  }

const Todo: Component<TodoProps> = ({ content }) => {
    return (
        <TodoContainer>
            <Form.Check type={"checkbox"} label={content[0]}/>
            <ProgressBar now={10} label={`${10}%`} style={{ width: "350px" }} />
            <Badge pill bg="primary">{content[1]}</Badge>
            <Buttons>
                <Button href='/edit'>Edit</Button>
                <CloseButton />
            </Buttons>
        </TodoContainer>
    )
}

export default Todo;