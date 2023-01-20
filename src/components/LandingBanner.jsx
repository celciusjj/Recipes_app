import { useState, useEffect } from 'react';
import LinkCard from "./LinkCard";
import { linkCardsInfo } from "../utils/variables";
import useWindowSize from '../hooks/useWindowsSize';

const LandingBanner = () => {
    const windowSize = useWindowSize();
    const [cards, setCards] = useState(linkCardsInfo);

    useEffect(() => {
        setCards(linkCardsInfo);
    }, [])


    return (
        <div className="landing_container">
            <div className="landing_div_text">
                <h2>
                    Recetas
                </h2>
            </div>
            <div className="landing_div_text_2">
                <h2>
                    para todos
                </h2>
            </div>
            <img src="bcq.jpg" className="landing_banner_img" alt="banner_img" />
            {windowSize.width <= 920 &&
                <div className="landing_banner_card_container">
                    {
                        cards.map(card =>
                            <LinkCard key={Math.random()} text={card.text} url={card.url} />
                        )
                    }
                </div>
            }

        </div>
    );
}

export default LandingBanner;