import '../../ParentChildStyles.scss'
import { useContext } from 'react'
import { Context } from '../Context'


export const GrandChild = () => {
    const { name } = useContext(Context)
    return (
        <div className="grandChild">
            <p>
                <i>Grandchild component</i>
            </p>
            
            <span>Name is: {name}</span>
        </div>
    )
}