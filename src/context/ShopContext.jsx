import {createContext, useState} from 'react';

export const ShopContext = createContext();

const ShopComponenetContext = ({children}) => {
    const [list, setLista] = useState([])

    return (
        <ShopContext.Provider value ={{lista, setLista}}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopComponenetContext