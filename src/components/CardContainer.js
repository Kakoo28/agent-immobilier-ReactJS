import Card from "./Card";
import { useState } from "react";

const CardContainer = () => {
    const contents = [
        {
            title: '1450 Cloudcroft Drop',
            subtitle: 'Illinois / Chicago',
            price: 250,
            imgSrc: './img/pic1.png'
        },
        {
            title: '140 Small Village',
            subtitle: 'Missouri / Kansas City',
            price: 200,
            imgSrc: './img/pic2.png'
        },
        {
            title: '1250 Lake House',
            subtitle: 'Colorado / Denver',
            price: 339,
            imgSrc: './img/pic3.png'
        },
        {
            title: '1450 Cloudcroft Drop',
            subtitle: 'Illinois / Chicago',
            price: 250,
            imgSrc: './img/pic4.png'
        },
        {
            title: '140 Small Village',
            subtitle: 'Missouri / Kansas City',
            price: 200,
            imgSrc: './img/pic5.png'
        },
        {
            title: '1250 Lake House',
            subtitle: 'Colorado / Denver',
            price: 339,
            imgSrc: './img/pic6.png'
        },
        {
            title: '1450 Cloudcroft Drop',
            subtitle: 'Illinois / Chicago',
            price: 250,
            imgSrc: './img/pic1.png'
        },
        {
            title: '140 Small Village',
            subtitle: 'Missouri / Kansas City',
            price: 200,
            imgSrc: './img/pic2.png'
        },
        {
            title: '1250 Lake House',
            subtitle: 'Colorado / Denver',
            price: 339,
            imgSrc: './img/pic3.png'
        },
        {
            title: '1450 Cloudcroft Drop',
            subtitle: 'Illinois / Chicago',
            price: 250,
            imgSrc: './img/pic4.png'
        },
        {
            title: '140 Small Village',
            subtitle: 'Missouri / Kansas City',
            price: 200,
            imgSrc: './img/pic5.png'
        },
        {
            title: '1250 Lake House',
            subtitle: 'Colorado / Denver',
            price: 339,
            imgSrc: './img/pic6.png'
        },
        {
            title: '1450 Cloudcroft Drop',
            subtitle: 'Illinois / Chicago',
            price: 250,
            imgSrc: './img/pic1.png'
        },
        {
            title: '140 Small Village',
            subtitle: 'Missouri / Kansas City',
            price: 200,
            imgSrc: './img/pic2.png'
        },
        {
            title: '1250 Lake House',
            subtitle: 'Colorado / Denver',
            price: 339,
            imgSrc: './img/pic3.png'
        },
        {
            title: '1450 Cloudcroft Drop',
            subtitle: 'Illinois / Chicago',
            price: 250,
            imgSrc: './img/pic4.png'
        },
        {
            title: '140 Small Village',
            subtitle: 'Missouri / Kansas City',
            price: 200,
            imgSrc: './img/pic5.png'
        },
        {
            title: '1250 Lake House',
            subtitle: 'Colorado / Denver',
            price: 339,
            imgSrc: './img/pic6.png'
        },
    ];

    const [cardCount, setCardCount] = useState(6);

    const handleMore = (e) => {
        setCardCount(cardCount+6);
        if ((cardCount+6) >= contents.length) {
            e.target.parentElement.style.display = 'none';
        }
    };
    const handleAll = (e) => {
        e.target.parentElement.style.display = 'none';
        setCardCount(contents.length);
    };

    return (
        <div>
            <div className="card-container">
                {
                    contents.slice(0, cardCount).map((c, index) => (
                        <Card key={index} c={c} index={index}></Card>
                    ))
                }
            </div>
            <div className="buttons-container">
                <button onClick={handleMore}>More Properties</button>
                <button onClick={handleAll}>All Properties</button>
            </div>

        </div>
    );
};

export default CardContainer;