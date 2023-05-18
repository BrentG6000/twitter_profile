import { useState, createContext } from 'react'

const DataTagContext = createContext([])

function DataTagProvider(props) {
    const [selected, setSelected] = useState('All')
    return (
        <DataTagContext.Provider value={[selected, setSelected]}>
            {props.children}
        </DataTagContext.Provider>
    )
}

DataTagProvider.context = DataTagContext

export default DataTagProvider