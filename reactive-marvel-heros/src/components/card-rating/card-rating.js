import './card-rating.css';

const CardRating = () => {
    return (
        <div className="card-rating rating-set ">
            <div className="rating-body">
                <div className="rating-active"></div>
                <div className="rating-items">
                    <input type ="radio" className="rating-item" value="1"></input>
                    <input type ="radio" className="rating-item" value="2"></input>
                    <input type ="radio" className="rating-item" value="3"></input>
                    <input type ="radio" className="rating-item" value="4"></input>
                    <input type ="radio" className="rating-item" value="5"></input>
                    <input type ="radio" className="rating-item" value="6"></input>
                    <input type ="radio" className="rating-item" value="7"></input>
                    <input type ="radio" className="rating-item" value="8"></input>
                    <input type ="radio" className="rating-item" value="9"></input>
                    <input type ="radio" className="rating-item" value="10"></input>
                </div>
            </div>
            <div className="rating-value" id="value-"></div>
        </div>
    )
}


export default CardRating;