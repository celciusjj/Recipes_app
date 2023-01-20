import { createContext, useState } from 'react'

const RecipersContext = createContext();

const RecipersProvider = ({ children }) => {

    const [recipes, setRecipes] = useState([]);
    return (
        <RecipersContext.Provider
            value={{
                recipes,
                setRecipes
            }}
        >
            {children}
        </RecipersContext.Provider>
    )
}

export {
    RecipersProvider
}

export default RecipersContext;