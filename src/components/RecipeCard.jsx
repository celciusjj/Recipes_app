const RecipeCard = () => {
    return (
        <div className="recipes_card_container">
            <div className="recipes_card_body">
                <div className="recipes_card_presentation" />
                <div className="recipes_card_name_container">
                    <p>Ojingeo</p>
                    <p>Muchim</p>
                </div>
                <div className="recipes_card_rate_container">
                    <div>
                        <img alt="staricon" src="/icons/ic_star.svg"></img>
                        <p>5.0</p>
                    </div>
                    <div >
                        <img alt="favoriteicon" src="/icons/ic-favorite.svg"></img>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RecipeCard;