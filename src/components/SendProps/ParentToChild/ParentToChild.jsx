import { Parent } from "./Parent/Parent"
import './ParentToChild.scss'


export const ParentToChild = () => {
    return (
        <div className="ParentToChild">
            <h2>Parent To Child</h2>
            <Parent />
        </div>
    )
}