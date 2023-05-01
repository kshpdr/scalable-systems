import { Button, CloseButton, Form } from "solid-bootstrap";
import { Component } from "solid-js";
import { Buttons, TodoContainer } from "./Todo.styles";

interface TodoProps {
    content: string;
  }

const Todo: Component<TodoProps> = ({ content }) => {
    return (
        <TodoContainer>
            <Form.Check type={"checkbox"} label={content}/>
            <Buttons>
                <Button href='/edit'>Edit</Button>
                <CloseButton />
            </Buttons>
        </TodoContainer>
    )
}

export default Todo;