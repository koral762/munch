import { MenuPreview } from "../cmps/MenuPreview"

export const Menu = () => {

    const obj = require('../data/items.json');

    return (
        <div className="menu-container">
            <p className="menu-title">הטעמים המיוחדים שלנו</p>
            <p className="menu-postage" style={{ fontSize: '18px' }}>דמי משלוח - 15 ש"ח</p>
            <p className="menu-postage" style={{ marginBottom: '40px'}}>תוספת גלידת שמנת - 7 ש"ח*</p>
            <p className="menu-postage sale">עכשיו במחירי השקה!!! אל תפספסוו</p>
            {obj.map((knafa) => <MenuPreview obj={knafa} />)}
        </div>
    )
}
