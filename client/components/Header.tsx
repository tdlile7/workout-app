import React, { FC } from "react"

type Props = {};

export const Header: FC<Props> = () => {
    return (
        <header className="Header">
            <div className="Header-Icon">ICON</div>
            <div className="Header-Menu">Side Menu</div>
        </header>
    )
}