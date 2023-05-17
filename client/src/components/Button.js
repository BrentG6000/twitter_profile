import { Link } from 'react-router-dom'
import '../styles/button.scss'

function Button({ buttonText, buttonLink }) {
    function handleClick() {
        alert("This app will place a cookie on your browser. Continue?")
        window.location = buttonLink
    }

    return (
        buttonLink.includes('auth') ?
            <div className='btn from-top' onClick={() => handleClick()}>
                {buttonText}
            </div> :
            <Link className='btn from-top' to={buttonLink}>
                <div>{buttonText}</div>
            </Link>
    )
}

export default Button