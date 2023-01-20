import { useContext, useEffect } from 'react';
import RecipersContext from '../context/RecipersProvider';
import RecipeCard from "./RecipeCard";
import { getRecipes } from "../petitions/index";
import { useQuery } from "react-query"


const NewRecipesPage = () => {
    const { recipes, setRecipes, setLoading } = useContext(RecipersContext);
    const { data, status } = useQuery('recipes', getRecipes);

    useEffect(() => {
        if (status === 'success') {
            setLoading(false);
            const { results } = data;
            console.log(results);
            setRecipes(results);
        }

        if (status === 'loading') {
            setLoading(true);
        }

        if (status === 'error') {
            setLoading(false);
        }

    }, [data, setRecipes, status, setLoading])

    return (
        <div>
            <div>
                <h3 className="new_recipes_page_text">
                    Nuevas Recetas
                </h3>
            </div>
            <div className="new_recipes_recipes_container">
                {/** Recipe by default */}
                <RecipeCard
                    key={Math.random()}
                    url={"/Ojingeo-muchim-1.png"}
                    name={"Ojingeo"}
                    text={"Muchim"}
                />
                {
                    recipes.map(item => (
                        <RecipeCard
                            key={item.id}
                            url={item.image}
                            name={item.title.split[0]}
                            text={item.nutrition.nutrients[0].name}
                        />
                    ))
                    //recipe car by default
                }
            </div>
        </div>
    );
}

export default NewRecipesPage;