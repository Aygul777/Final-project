import React from 'react';
import './Card.css';
import Button from "../Button/Button";





export default function Card(props) {
    const  {
        item,
        addFood
    } =props;
    const { id, title, main_image, description, price, weight } = item;

    return (
            <div className={'card-container'}>
                <div className={'card__img'}>
                    <img src={main_image.src} alt={main_image.alt}/>
                 </div>
                <div className={'card__title'}> {title} </div>
                <div className={'card__subtitle'}> {description} </div>
                <div className={"card__description_detail"}>
                    <div className={"card__price"}>{price}</div> &nbsp;/&nbsp;
                    <div className={"card__weight"}>{weight}</div>
                    <div
                        onClick={() => addFood(item)}>
                        <Button title={'Добавить в корзину'}/>
                    </div>
                </div>
            </div>

        )
    }
