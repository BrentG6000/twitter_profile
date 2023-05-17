import Button from './Button'
import DataTags from './DataTags'
import '../styles/frost.scss'

function Frost({ headerText, bodyText, buttonText, addButton, buttonLink, twitterData, profile}) {
    return (
    <div className='frost'>
        { profile ? 
            <div className='insideFrostContainer' id='profile'>
                <h2>{ headerText }</h2>
                <p style={{marginTop: '20px'}}>{ bodyText }</p>
                { twitterData ?
                    <DataTags /> :
                    <div></div>}
                { addButton ?
                    <Button buttonText={ buttonText } buttonLink={ buttonLink }/> :
                    <p></p> }
            </div> :
            <div className='insideFrostContainer'>
                <h2>{ headerText }</h2>
                <p style={{marginTop: '30px'}}>{ bodyText }</p>
                { twitterData ?
                    <DataTags /> :
                    <div></div> }
                { addButton ?
                    <Button buttonText={ buttonText } buttonLink={ buttonLink }/> :
                    <p></p> }
            </div> }
    </div>
    )
}

export default Frost