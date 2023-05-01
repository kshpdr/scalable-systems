import {Component} from 'solid-js'
import Layout from '../Layout/Layout'
import {Form} from 'solid-bootstrap'

const Edit: Component<{}> = () => {
    return (
        <Layout headerContent={"Your best TODO app"}>
            <Form>
                <Form.Group>
                    <Form.Label>Edit your TODO </Form.Label>
                    <Form.Control type='text'/>
                </Form.Group>
            </Form>
        </Layout>
    )
}

export default Edit