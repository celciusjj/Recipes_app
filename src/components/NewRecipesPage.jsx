import RecipeCard from "./RecipeCard";
import { getRecipes } from "../petitions/index";
import { useQuery } from "react-query"

const NewRecipesPage = () => {
    const { data, status } = useQuery('recipes', getRecipes);
    return (
        <div>
            <div>
                <h3 className="new_recipes_page_text">
                    Nuevas Recetas
                </h3>
            </div>
            <div className="new_recipes_recipes_container">
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>
        </div>
    );
}

export default NewRecipesPage;