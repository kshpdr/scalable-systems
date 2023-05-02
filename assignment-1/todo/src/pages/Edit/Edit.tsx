import {Component} from 'solid-js'
import Layout from '../../components/Layout'
import {Form} from 'solid-bootstrap'

const Edit: Component<{}> = () => {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Edit your TODO </Form.Label>
                    <Form.Control type='text'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Due to: </Form.Label>
                    <Form.Control type='date'/>
                </Form.Group>
            </Form>
        </>
    )
}

export default Edit