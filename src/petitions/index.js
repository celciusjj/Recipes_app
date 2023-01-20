import axios from "axios";
const apiKey = "e90e7bcc2e754430bc4196b4086b2236";
const url = "https://api.spoonacular.com/recipes/random?apiKey=e90e7bcc2e754430bc4196b4086b2236"

export const getRecipes = async () => {
    const response = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response)
    return response.data;
}