import Button from './Button/Button'
import './Technologies.scss'

const Technologies = () => {

    let technologies = {
        techno: ['HTML', 'CSS', 'Java Script', 'React', 'GraphQL', 'Redux', 'SASS'],
    }

    return (
        <section className='techno-page'>
            <ul>
                {technologies.techno.map(t => (
                    <li key={t} className='item'>
                        <div>{t}</div>
                        <Button />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Technologies