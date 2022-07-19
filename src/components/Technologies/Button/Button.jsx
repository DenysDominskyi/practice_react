import { useState } from 'react'
import './Button.scss'

const Button = () => {

    const [btnState, setBtnState] = useState()
    const handleClick = (e) => {
        setBtnState(btnState => !btnState)
    }
    let toggleClassCheck = btnState ? ' newColor' : ''

    const [likes, setLikes] = useState(0)

    return (
        <div className='buttons'>
            <button className={`btn ${toggleClassCheck}`}
                    onClick={handleClick}
            >Like</button>

            <button className='countBtn'
                    onClick={() => setLikes(likes - 1)}
            >-</button>

            <p>{likes}</p>

            <button className='countBtn'
                    onClick={() => setLikes(likes + 1)}
            >+</button>
        </div>
    )
}

export default Button