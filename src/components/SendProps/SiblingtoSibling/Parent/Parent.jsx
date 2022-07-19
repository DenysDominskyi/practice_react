import { Sibling1 } from '../Sibling1/Sibling1'
import { Sibling2 } from '../Sibling2/Sibling2'
import '../../ParentChildStyles.scss'
import { useState } from 'react'

export const Parent = () => {
    const [newName, setName] = useState('')

    const handleNameChange = (name) => {
        setName(name)
    }

    return (
        <div className='Parent'>
            <p>
                <i>Parent component</i>
            </p>

            <Sibling1 changeName={handleNameChange} />
            <Sibling2 name={newName} />
        </div>
    )
}