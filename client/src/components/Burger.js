import { useState } from 'react'
import { Squash as Hamburger} from 'hamburger-react'
import '../styles/navbar.scss'

var isToggled

function Burger({ isActive, setActive }) { 
    
    const [backgroundColor, setBackGroundColor] = useState('black')
    const [burgerColor, setBurgerColor] = useState('sienna')
    const styles = {
        display: 'flex',
        background: backgroundColor,
        width: '48px',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    }

    function Enter() {
        setBackGroundColor('sienna')
        setBurgerColor('black')
    }
    
    function Exit() {
        if (isToggled) { 
        setBackGroundColor('#773d22')
        setBurgerColor('black')
        }
        else {
        setBackGroundColor('black')
        setBurgerColor('sienna')
        }
    }
    
    return (
        <div style={styles}
        id='burger'
        onMouseEnter={() => Enter()}
        onMouseLeave={() => Exit()}
        onClick={() => setActive(!isActive)}
        >
            <Hamburger
                color={burgerColor}
                onToggle={ toggled => { toggled ? isToggled=true : isToggled=false }}
            />
        </div>
    )
}

export default Burger