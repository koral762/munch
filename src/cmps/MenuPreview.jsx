import React from 'react';

export const MenuPreview = () => {

    var obj = {
        name: "קלאסי",
        img: "https://media.reshet.tv/image/upload/t_image_article_800/v1602566509/kna1cz_kbpzsl.jpg",
        description: "תערובת הגבינות המיוחדת והאיכותית שלנו עטופה קדאיף אסלי במי סוכר ומעל פיסטוק בלאדי",
        priceSmall: "40 קטן",
        priceLarge: "גדול 70"
    }

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