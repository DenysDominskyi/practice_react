import '../../ParentChildStyles.scss'
import Form from 'react-bootstrap/Form'
import { FormGroup } from 'react-bootstrap'

export const Sibling1 = ({changeName}) => {

    const handleNameChange = (e) => {
        changeName(e.target.value)
    }

    return (
        <div className="child">
            <p>
                <i>Sibling1 component</i>
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