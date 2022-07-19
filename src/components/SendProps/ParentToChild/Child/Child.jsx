import '../../ParentChildStyles.scss'

export const Child = ({ name }) => {
    return (
        <div className="child">
            <p>
                <i>Child component</i>
            </p>
            <span>Name is: {name}</span>
        </div>
    )
}