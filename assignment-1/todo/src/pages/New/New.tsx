import { Component, For } from 'solid-js';

import { Form } from 'solid-bootstrap';


const New: Component<{}> = () => {
  return (
    <Form>
      <Form.Group>
          <Form.Label>Your new TODO</Form.Label>
          <Form.Control type='text'/>
      </Form.Group>
    </Form>
  );
};

export default New;