const LinkCards = ({ url, text }) => {
    return (
        <div className="link_card_body">
            <div>
                <img alt="link icon" src={url}></img>
            <p>{text}</p>
        </div>
        </div >
    );
}

export default LinkCards;