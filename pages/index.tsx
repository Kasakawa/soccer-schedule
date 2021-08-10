import { useState } from 'react'
import homeStyles from '../styles/Home.module.css'
import Table from '../components/Table'
import Popup from '../components/Popup'

export default function Home() {
    const [title, setTitle] = useState()
    const [games, setGames] = useState()

    const [popuped, setPopuped] = useState(false)
    const popupedContent = (id, title, games) => {
        setPopuped(!popuped)
        console.log(id)
        setTitle(title)
        setGames(games)
    }

    return (
        <>
            <h1 className={homeStyles.h1}>8/8 ~ 8/15</h1>
            <Table onClick={popupedContent} />
            {popuped ? <Popup onClick={popupedContent} title={title} games={games} /> : null}
        </>
    )
}
