import { Parent } from "./Parent/Parent"
import './ChildToParent.scss'


export const ChildToParent = () => {
    return (
        <div className="ChildToParent" id="2">
            <h2>Child To Parent</h2>
            <Parent />
        </div>
    )
}