import { MenuPreview } from "../cmps/MenuPreview"

export const Menu = () => {

    const objKnafe = require('../data/items.json');
    const objMore = require('../data/more.json');

    return (
        <div className="menu-container">
            <p className="menu-title">הטעמים המיוחדים שלנו</p>
            <p className="menu-postage" style={{ fontSize: '18px' }}>דמי משלוח - 15 ש"ח</p>
            <p className="menu-postage" style={{ marginBottom: '40px'}}>תוספת גלידת שמנת - 7 ש"ח*</p>
            <p className="menu-postage sale">עכשיו במחירי השקה!!! אל תפספסוו</p>
            <p className="menu-title knafe">:כנאפה</p>
            {objKnafe.map((knafa) => <MenuPreview obj={knafa} />)}
            <p className="menu-title more">:שונות</p>
            {objMore.map((knafa) => <MenuPreview obj={knafa} />)}
        </div>
    )
}
