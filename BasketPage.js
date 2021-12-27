import React, { useState } from 'react';
import './BasketPage.css';
import Button from "../../Button/Button";


export default function BasketPage(props) {

    const [ basketData, setBasketData ] = useState(JSON.parse(localStorage.getItem('basketData')) || []);

    console.log(basketData)
    return (
        <div>
        <div className='basket_name'>Корзина с выбранными товарами</div>
        <div className="basket-container">
            {basketData.map((item) => {
                return (
                   <div>
                        <div className={'basket_image'}>
                            <img  src={item.main_image.src} alt={item.main_image.alt}/>
                        </div>
                        <div className={'basket_item'}>
                        {item.title}
                    </div>
                <div className={'basket_item'}>
                    {item.price} Р.
                </div>

                   </div>


                )
            })}
        </div>
        </div>
    );
}