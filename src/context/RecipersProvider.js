import { createContext, useState } from 'react'

const RecipersContext = createContext();

const RecipersProvider = ({ children }) => {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    return (
        <RecipersContext.Provider
            value={{
                recipes,
                setRecipes,
                loading,
                setLoading
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