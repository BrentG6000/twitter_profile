import Frost from '../components/Frost'

function Login() {
    const headerText = 'Sign in to Twitter to Begin'
    const bodyText = 'This link will allow you to link your Twitter account to begin searching your profile.'
    const buttonText = 'Sign in'
    const addButton = 'true'
    //const buttonLink = 'http://localhost:5000/auth/twitter'
    const buttonLink = 'https://brentg123-twitter-project.herokuapp.com/auth/twitter'
    return (
        <div id='resize'>
        <Frost
            headerText={headerText}
            bodyText={bodyText}
            buttonText={buttonText}
            addButton={addButton}
            buttonLink={buttonLink}/>
        </div>
    )
}

export default Login