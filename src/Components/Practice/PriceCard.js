import "../../Styles/PriceCard.css"

const PriceCard = () => {

    return (
        <div className="Container">
            <div className="Card">
                <div className="Top">
                    <div className="Price"> $10</div>
                    <p className="Title"> Basic</p>
                    <p className="Description"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
                <div className="Middle">
                    <ul className="Items">
                        <li className="Item"> Lorem Ipsum is not simply random text. </li>
                        <li className="Item"> Lorem Ipsum is not simply random text. </li>
                        <li className="Item"> Lorem Ipsum is not simply random text. </li>
                        <li className="Item"> Lorem Ipsum is not simply random text. </li>
                    </ul>
                </div>
                <div className="Bottom">
                    <button> Order Now</button>
                </div>
            </div>
        </div>
    );
}
export default PriceCard;