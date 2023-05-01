import { Component } from 'solid-js';
import { Button, Form } from 'solid-bootstrap';
import { SubmitButton } from './New.styles';


const New: Component<{}> = () => {
  return (
    <>
      <Form>
        <Form.Group>
            <Form.Label>Your new TODO</Form.Label>
            <Form.Control type='text'/>
        </Form.Group>
      </Form>
      <SubmitButton>
          <Button>Submit</Button>
      </SubmitButton>
    </>
  );
};

export default New;