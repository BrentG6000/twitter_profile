import { useContext } from 'react'
import UserProvider from '../contexts/UserProvider'
import DataTagProvider from '../contexts/DataTagContext'
import ReactTooltip from 'react-tooltip'
//import '../index.css'
import '../styles/button.scss'
import '../styles/App.scss'

const DataTags = () => {
    const [selected, setSelected] = useContext(DataTagProvider.context)
    const userData = useContext(UserProvider.context)
    
    const options = Object.keys(userData).filter(key => {
        return userData[key] !== null
    })
    const allOptions = ['All', ...options, 'Tweet', 'Latest Tweet', 'Followers', 'Following', 'Tweet Count', 'Favorites']

    return (
        <div>
            { allOptions.map(option => {
                const extraClass = option === selected ? 'selected' : ''
                let buttonName = ''
                let tip = ''
                
                switch (option) {
                    case 'displayName': 
                        buttonName = 'Screen Name'
                        tip = 'This displays your screen name (not your @ Twittter handle)'
                        break
                    case 'username':  
                        buttonName = 'Twitter Handle'
                        tip = 'This displays your @ Twitter handle'
                        break
                    case 'id': 
                        buttonName = 'ID Number'
                        tip = 'This is the internal number Twitter uses to identify your account'
                        break
                    case 'All': 
                        buttonName = 'Profile'
                        tip = 'This shows your entire Twitter profile information'
                        break
                    case '_accessLevel': 
                        buttonName = 'Access Level'
                        tip = 'This is the access level to your account that you have given to this app'
                        break
                    case 'Tweet': 
                        buttonName = 'Send A Tweet'
                        tip = 'Enter a message into the text box below and click submit to tweet it out'
                        break
                    case 'Latest Tweet': 
                        buttonName = 'Latest Tweet'
                        tip = 'This will show the last Tweet your account sent out'
                        break
                    case 'Followers': 
                        buttonName = 'Followers'
                        tip = 'The number of follows this Twitter account has'
                        break
                    case 'Following': 
                        buttonName = 'Following'
                        tip = 'The number of accounts you follow'
                        break
                    case 'Tweet Count': 
                        buttonName = 'Tweet Count'
                        tip = 'The number of tweets that have been sent out by this account'
                        break
                    case 'Favorites': 
                        buttonName = 'Favorites'
                        tip = 'The number of tweets you have liked'
                        break
                    default: 
                        buttonName = '' }          
                
                return (
                    <div className='dataTagContainer'>
                        { buttonName === '' ? <div></div> :
                                <div
                                    onClick={() => setSelected(option)}
                                    className={`tag ${ extraClass }`}
                                    data-tip={ tip }
                                >
                                    <p>
                                        { buttonName }   
                                    </p>
                                    <ReactTooltip place='right' effect='solid'/> 
                                </div>
                        }
                    </div>
                )
            }) }
        </div>
    )
}

export default DataTags