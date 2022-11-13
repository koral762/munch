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
                <div>
                    <p className="knafa-description">{obj.description}</p>
                </div>

                <div className="price">
                    <p className="knafa-price-small">₪{obj.priceSmall}</p>
                    {obj.priceLarge && <p className="knafa-price-large">/ ₪{obj.priceLarge}</p>}
                </div>
                {obj.priceLarge && <div className="" >
                    <p className="knafa-price-small" style={{ marginTop: '0px' }}>(קוטר 22 ס"מ) / (קוטר 30 ס"מ)</p>
                </div>}

            </div>


        </div>
    )
}