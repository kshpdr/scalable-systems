import {Component} from 'solid-js'
import Layout from '../../components/Layout'
import {Button, Form} from 'solid-bootstrap'
import { SubmitButton } from './Edit.styles'

const Edit: Component<{}> = () => {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Edit your todo</Form.Label>
                    <Form.Control type='text'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Due to: </Form.Label>
                    <Form.Control type='date'/>
                </Form.Group>
            </Form>
            <SubmitButton>
                <Button>Submit</Button>
            </SubmitButton>
        </>
    )
}

export default Edit