import { ChildToParent } from './ChildToParent/ChildToParent'
import { ParentToChild } from './ParentToChild/ParentToChild'
import './SendProps.scss'
import { SiblingtoSibling } from './SiblingtoSibling/SiblingtoSibling'

const SendProps = () => {
    return (
        <div className="send-props-page">
            <ParentToChild />
            <ChildToParent />
            <SiblingtoSibling />
        </div>
    )
}

export default SendProps