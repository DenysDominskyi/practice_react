import { Component } from './Component'
import './ParentToGrandchild.scss'


export const ParentToGrandchild = () => {
    return (
        <div className="ParentToGrandchild" id='4'>
            <h2>Parent To Grandchild. Use React Context API</h2>
            <Component />
        </div>
    )
}