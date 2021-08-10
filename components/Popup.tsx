import { useState } from 'react'
import PopupStyles from '../styles/Popup.module.css'

type PopupProps = {
    title: string
    games: string[]
}

const Popup = ({ onClick, title, games }: PopupProps) => {
    const popupContents = [
        { title: 'Jリーグ', games: ['C大阪', '神戸'] },
        { title: '天皇杯', games: ['川崎'] },
    ]

    return (
        <>
            <div className={PopupStyles.back} onClick={onClick}></div>
            <div className={PopupStyles.popup}>
                <ul>
                    {popupContents.map((content) => (
                        <li>
                            <h1>{content.title}</h1>
                            <ul>
                                {content.games.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Popup
