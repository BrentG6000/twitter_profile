import { createContext, useState, useEffect } from 'react'

const context = createContext(null)

const UserProvider = props => {
    const [user, setUser] = useState({})
    
    useEffect(() => {
        loadData()
    }, [])

    async function loadData() {
        try { 
            //const response = await fetch('http://localhost:5000/user')
            const response = await fetch('https://brentg123-twitter-project.herokuapp.com/user')
            const data = await response.json()
            await setUser(data)
        } 
        catch (e) {
            console.log(e)
        }
    }

    return (
        <context.Provider value={user}>
            {props.children}
        </context.Provider>
    )
}

UserProvider.context = context

export default UserProvider