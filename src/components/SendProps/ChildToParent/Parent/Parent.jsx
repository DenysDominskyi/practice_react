import '../../ParentChildStyles.scss'
import { Child } from '../Child/Child'
import { useState } from 'react'

export const Parent = () => {

    const [name, setName] = useState('')

    const handleNameChange = (name) => {
        setName(name)
    }

    return (
        <div className='Parent'>
            <p>
                <i>Parent component</i>
            </p>

            <span>Name is: {name}</span>

            <Child lalala={handleNameChange}/>
        </div>
    )
}