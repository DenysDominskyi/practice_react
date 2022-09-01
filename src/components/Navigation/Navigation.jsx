// import './Navigation.scss'
import '../MQ/main.scss'

import { NavLink } from 'react-router-dom'

const Navigation = () => {
    
    return (
        <div className='nav'>
            <ul className='title-list'>
                <NavLink
                    exact='true'
                    className='title-item'
                    activeclassname='active'
                    to='/'
                >
                    <p>Home</p>
                </NavLink>

                <NavLink
                    exact='true'
                    className='title-item'
                    activeclassname='active'
                    to='/technologies'
                >
                    <p>Technologies</p>

                </NavLink>

                <NavLink
                    exact='true'
                    className='title-item'
                    activeclassname='active'
                    to='/send_props'
                >
                    <p>Send Props</p>
                </NavLink>

                <NavLink
                    exact='true'
                    className='title-item'
                    activeclassname='active'
                    to='/delicious'
                >
                    <p>Delicious</p>
                </NavLink>
            </ul>
        </div>
    )
}

export default Navigation