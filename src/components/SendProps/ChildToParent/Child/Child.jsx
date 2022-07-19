import '../../ParentChildStyles.scss'
import Form from 'react-bootstrap/Form'
import { FormGroup } from 'react-bootstrap'

export const Child = ({ lalala }) => {

    const handleNameChange = (e) => {
        lalala(e.target.value)
    }

    return (
        <div className="child">
            <p>
                <i>Child component</i>
            </p>
            <Form>
                <FormGroup>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter name' onChange={handleNameChange}/>
                </FormGroup>
            </Form>
        </div>
    )
}