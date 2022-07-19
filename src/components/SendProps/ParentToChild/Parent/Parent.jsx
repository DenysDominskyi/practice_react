import '../../ParentChildStyles.scss'
import Form from 'react-bootstrap/Form'
import { FormGroup } from 'react-bootstrap'
import { Child } from '../Child/Child'
import { useState } from 'react'

export const Parent = () => {

    const [name, setName] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div className='Parent'>
            <p>
                <i>Parent component</i>
            </p>
            <Form>
                <FormGroup>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter text' onChange={handleNameChange}/>
                </FormGroup>
            </Form>

            <Child name={name} />
        </div>
    )
}