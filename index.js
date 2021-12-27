import React, {useEffect, useState} from 'react';
import Card from "../../Card/Card";
import './CardsPage.css';
import {Link} from "react-router-dom";



export default function CardsPage (props) {

    const [CardsData, setCardsData]=useState([])
    const [ basketData, setBasketData ] = useState(JSON.parse(localStorage.getItem('basketData')) || []);
    const [count, setCount] = useState(basketData?.length);
    const [price, setPrice] = useState(0);

    function addFood(food) {
        setBasketData([...basketData, food])
    }
    useEffect(() => {
        console.log(basketData)
        let result = basketData.reduce(function(accumulator, currentValue) {
            return accumulator + Number(currentValue.price);
        }, 0);
        setPrice(result);
        setCount(basketData?.length);
        localStorage.setItem('basketData', JSON.stringify(basketData));
    });


    useEffect(() => {
        fetch('https://aygul777.github.io/jsonapi/burger.json')
            .then(response => {
                return response.json();
            })
            .then(data =>{
                console.log(data)
                setCardsData(data.data)
            })
    },[])



    return (
        <div className="cards-container">
            <div className="header">
                <h3>Наша продукция</h3>
                <Link to={'/basket'}>
                    <div className="basket">
                        {count} шт на сумму {price}₽
                    </div>
                </Link>
            </div>
            <div className="cards-list">
                {CardsData.map(item => {
                    return (
                        <Card
                            item={item}
                            addFood={addFood}
                        />
                    )
                })}
            </div>
        </div>
    );
}









