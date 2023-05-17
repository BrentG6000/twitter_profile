import Frost from '../components/Frost'

function About() {
    const headerText = 'About Twitter Profile Searcher'
    const bodyText = 'This web app was created by Brent Gustafson'
    const buttonText = 'Back'
    const addButton = false
    return (
        <div id='resize'>
        <Frost
            headerText={headerText}
            bodyText={bodyText}
            buttonText={buttonText}
            addButton={addButton}/>
        </div>
    )
}

export default About