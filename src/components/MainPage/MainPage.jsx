import './MainPage.scss'

const MainPage = (props) => {

    const createTitle = (title) => `Lets Go, ${title}`

    return (
        <section className='main-page'>
            <div className='title'>
                <h1>{createTitle(props.title)}</h1>
            </div>
        </section>
    )
}

export default MainPage