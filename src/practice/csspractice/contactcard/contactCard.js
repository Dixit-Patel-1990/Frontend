import React, {useState} from "react";
import './contactCard.css'
import IMG_3784 from './IMG_3784.jpeg';
const ContactCard = () => {

    const [active, setActive] = useState(false);
    const displayCard = () => {
        setActive(!active);
    }

    return (
        <>
            <div className="container">
                <div className={active ? "card active" : "card"}>
                    <span className="arrow"></span>
                    <div className="content">
                        <h3>Dixit Patel</h3>
                        <img src={IMG_3784}/>
                    </div>
                </div>
                <button className="btn" onClick={displayCard}></button>

            </div>
        </>
    )
}

export default ContactCard;