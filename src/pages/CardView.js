import {useLocation} from "react-router-dom";
import Header from "../components/Header";
import {useState} from "react";

const CardView = () => {
    let infos = useLocation().state;
    const [currentImage, setCurrentImage] = useState(infos.imgSrc);
    const [toggleButton, setToggleButton] = useState({class: 'lightmode', text: 'Darken'})

    const handleChangeImage = (e) => {
        setCurrentImage(`./img/pic${e.target.id}.png`);
    }
    const handleToggleButton = () => {
        if (toggleButton.class === 'lightmode') {
            setToggleButton({class: 'darkmode', text: 'Lighten'});
        } else {
            setToggleButton({class: 'lightmode', text: 'Darken'});
        }
    }

    return (
        <div className="main-container">
            <Header />
            <div className="card-view-container">
                <div className="images-container">
                    <button className={'toggle-button'} onClick={handleToggleButton}>{toggleButton.text}</button>
                    <img className={toggleButton.class} src={currentImage} alt={"Image - " + infos.title}/>
                    <div>
                        <img src={"./img/pic1.png"} id={'1'} alt="pic1" onClick={handleChangeImage}/>
                        <img src={"./img/pic2.png"} id={'2'} alt="pic2" onClick={handleChangeImage}/>
                        <img src={"./img/pic3.png"} id={'3'} alt="pic3" onClick={handleChangeImage}/>
                        <img src={"./img/pic4.png"} id={'4'} alt="pic4" onClick={handleChangeImage}/>
                        <img src={"./img/pic5.png"} id={'5'} alt="piC5" onClick={handleChangeImage}/>
                    </div>
                </div>
                <div className="description">
                    <div>
                        <h2>{infos.title}</h2>
                        <h4>{infos.subtitle}</h4>
                        <h6>${infos.price}.00</h6>
                        <ul>
                            <li>3400 Sq Ft</li>
                            <li>2 Bedrooms</li>
                            <li>1 Bathroom</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardView;