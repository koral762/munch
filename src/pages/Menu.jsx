import { MenuPreview } from "../cmps/MenuPreview"

export const Menu = () => {

    return (
        <div className="menu-container">
            <p className="menu-title">הטעמים המיוחדים שלנו</p>
            <MenuPreview />
            <MenuPreview />
            <MenuPreview />
            <MenuPreview />
            <MenuPreview />
            <MenuPreview />
        </div>
    )
}
