import React from 'react';

export const MenuPreview = (props) => {

    const obj = props.obj;

    return (

        <div className="preview">

            <div className="preview-right">
            <img className="knafa-img" src={obj.img} width="100px" height="100px"></img>
            </div>

            <div className="preview-left">
            <p className="knafa-name">{obj.name}</p>
            <p className="knafa-description">{obj.description}</p>

            <div className="price">
            <p className="knafa-price-small">₪{obj.priceSmall} / </p>
            <p className="knafa-price-large">₪{obj.priceLarge} </p>
            </div>

            </div>


        </div>
    )
}