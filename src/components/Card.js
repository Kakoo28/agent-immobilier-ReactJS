import {NavLink} from "react-router-dom";

const Card = ({c, index}) => {
    return (
        <NavLink state={c} id={index} className={"card"} to='/card-view'>
            <img src={c.imgSrc} alt={'Image - ' + c.title}/>
            <h2>{c.title}</h2>
            <h4>{c.subtitle}</h4>
            <h6>${c.price}.00</h6>
            <div>
                <ul>
                    <li>3400 Sq Ft</li>
                    <li>2 Bedrooms</li>
                    <li>1 Bathroom</li>
                </ul>
            </div>
        </NavLink>

    );
};

export default Card;