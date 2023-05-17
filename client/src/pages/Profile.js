import { useContext } from 'react'
import _ from 'lodash'
import UserProvider from '../contexts/UserProvider'
import Frost from '../components/Frost'
import Terminal from '../components/Terminal'
import Login from '../pages/Login'

function Profile() {
    const userData = useContext(UserProvider.context)
    const headerText = 'Twitter Profile'
    const bodyText = 'Click any button and see the Twitter terminal below'
    const buttonText = 'Back'
    const addButton = false
    const twitterData = true
    const profile = true

    return (
        <>
            { _.isEmpty(userData) ?
                <Login/> :
                <div id='resize'>
                    <Frost
                        headerText={headerText}
                        bodyText={bodyText}
                        buttonText={buttonText}
                        addButton={addButton}
                        twitterData={twitterData}
                        profile={profile}>
                    </Frost>
                <Terminal/>
                </div>
            }
        </>
    )
}

export default Profile