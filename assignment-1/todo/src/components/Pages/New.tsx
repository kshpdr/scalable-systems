import { Component, For } from 'solid-js';

import Layout from '../Layout/Layout';
import Todo from '../Todo/Todo';
import { CloseButton, Collapse, Form } from 'solid-bootstrap';


const New: Component<{}> = () => {
  return (
    <Layout headerContent={"Your best TODO app"}>
      <Form>
        <Form.Group>
            <Form.Label>Your new TODO</Form.Label>
            <Form.Control type='text'/>
        </Form.Group>
      </Form>
    </Layout>
  );
};

export default New;