import '../../ParentChildStyles.scss'

export const Sibling2 = ({ name }) => {
    return (
        <div className="child">
            <p>
                <i>Sibling2 component</i>
            </p>
            <span>Name is: {name} </span>
        </div>
    )
}