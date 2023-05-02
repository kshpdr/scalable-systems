import { Component, For } from 'solid-js';

import { Form, Button } from 'solid-bootstrap';


const New: Component<{}> = () => {
  return (
    <Form>
      <Form.Group>
          <Form.Label>Your new TODO</Form.Label>
          <Form.Control type='text'/>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default New;