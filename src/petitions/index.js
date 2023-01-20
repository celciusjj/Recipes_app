import axios from "axios";
const apiKey = "ac68f5572fca4421a4f74b872ce4f550";
const url = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=3&apiKey=${apiKey}`

export const getRecipes = async () => {
    //the function should be received the params, but for the porpose of project, the url is fixed.
    const response = await axios.get(url);
    return response.data;
}