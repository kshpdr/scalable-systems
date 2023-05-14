import { Button, CloseButton, Form, ProgressBar, Badge } from "solid-bootstrap";
import { Component } from "solid-js";
import { Buttons, TodoContainer } from "./Todo.styles";

interface TodoProps {
    content: void;
  }

const Todo: Component<TodoProps> = ({ content }) => {
    return (
        <TodoContainer>
            <Form.Check type={"checkbox"} checked={content.done}/>
            {content.task}
            <ProgressBar now={10} label={`${content.progress}%`} style={{ width: "350px" }} />
            <Badge pill bg="primary">{content.deadline}</Badge>
            <Buttons>
                <Button href={`/edit/${content.id}`}>Edit</Button>
                <CloseButton />
            </Buttons>
        </TodoContainer>
    )
}

export default Todo;