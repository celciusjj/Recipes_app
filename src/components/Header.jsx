import { useState, useEffect, useContext } from 'react';
import { linkCardsInfo } from "../utils/variables";
import useWindowSize from '../hooks/useWindowsSize';
import RecipersContext from '../context/RecipersProvider';

const Header = () => {
    const { loading } = useContext(RecipersContext);
    const windowSize = useWindowSize();
    const [cards, setCards] = useState(linkCardsInfo);

    useEffect(() => {
        setCards(linkCardsInfo);
    }, [])

    return (
        <header className="header_container">
            <div className="header_div_container_logo">
                <h1>Recipe</h1>
                <h1>App</h1>
                {loading && <div class='spinner'></div>}
            </div>
            {
                windowSize.width >= 920 ?
                    <div className="header_div_container_links">
                        <p>
                            Home
                        </p>
                        {
                            cards.map(item => (
                                <p key={Math.random()}>{item.text}</p>
                            ))
                        }
                    </div>
                    :
                    <div className='header_div_container_home'>
                        <img alt="home" src="icons/ic_home.svg">

                        </img>
                    </div>
            }
        </header>
    );
}

export default Header;