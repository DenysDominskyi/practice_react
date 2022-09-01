import './SendProps.scss';
import { ParentToChild } from './ParentToChild/ParentToChild';
import { ChildToParent } from './ChildToParent/ChildToParent';
import { SiblingtoSibling } from './SiblingtoSibling/SiblingtoSibling';
import { ParentToGrandchild } from './ParentToGrandchild__React Context API__/ParentToGrandchild';


const SendProps = () => {
    return (
        <div className="send-props-page">
            <div className='pageNav'>
                <a href='#1'>1</a>
                <a href='#2'>2</a>
                <a href='#3'>3</a>
                <a href='#4'>4</a>
            </div>
            <ParentToChild />
            <ChildToParent />
            <SiblingtoSibling />
            <ParentToGrandchild />
        </div>
    )
}

export default SendProps