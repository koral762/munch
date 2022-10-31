import { MenuPreview } from "../cmps/MenuPreview"


export const Menu = () => {

    const obj = require('../data/items.json');

    return (
        <div className="menu-container">
            <p className="menu-title">הטעמים המיוחדים שלנו</p>
            {obj.map((knafa) => <MenuPreview obj={knafa} />)}

        </div>
    )
}
