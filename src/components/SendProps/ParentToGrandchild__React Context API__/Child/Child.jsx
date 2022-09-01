import '../../ParentChildStyles.scss'
import { GrandChild } from '../GrandChild/GrandChild'

export const Child = () => {
    return (
        <div className="child">
            <p>
                <i>Child component</i>
            </p>
            <GrandChild />
        </div>
    )
}