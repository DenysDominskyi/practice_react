import '../../ParentChildStyles.scss'
import Form from 'react-bootstrap/Form'
import {Child} from '../Child/Child'
import { FormGroup } from 'react-bootstrap'
import { useContext } from 'react'
import { Context } from '../Context'

export const Parent = () => {

    const { setName } = useContext(Context)

    const handleChangeName = (e) => {
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
                    <Form.Control type='text' placeholder='Enter text' onChange={handleChangeName}/>
                </FormGroup>
            </Form>

            <Child />
        </div>
    )
}