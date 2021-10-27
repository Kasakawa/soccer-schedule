import { useEffect, useState } from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'
import homeStyles from '../styles/Home.module.css'
import Weekly from '../components/weekly/Weekly'
import Day from '../components/Day'
import Modal from '../components/Modal'
import DayForm from '../components/DayForm'

type weeklyContentsState = {
    id: number
    leagueColor: string
}[][][][]

type dayContentsState = {
    id: number
    time: string
    title: string
    home: string
    away: string
}[][][]

export default function Home() {
    const [weeklyContents, setWeeklyContents] = useState<weeklyContentsState>([
        [
            [
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
            ],
            [
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
            ],
            [
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
            ],
            [
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
            ],
            [
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
            ],
            [
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
            ],
            [
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
            ],
        ],
        [
            [
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
            ],
            [
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
            ],
            [
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
            ],
            [
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
            ],
            [
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
            ],
            [
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
            ],
            [
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
                [
                    {
                        id: 1,
                        leagueColor: '',
                    },
                    {
                        id: 2,
                        leagueColor: '',
                    },
                    {
                        id: 3,
                        leagueColor: '',
                    },
                    {
                        id: 4,
                        leagueColor: '',
                    },
                ],
            ],
        ],
    ])

    const week = ['日', '月', '火', '水', '木', '金', '土']

    const [dayContent, setDayContents] = useState<dayContentsState>([
        [[], [], [], [], [], [], []],
        [[], [], [], [], [], [], []],
    ])

    const [weekSelectIndex, changeWeek] = useState(0)
    // Prev week
    const clickLeft = () => {
        if (weekSelectIndex === 0) return
        changeWeek(weekSelectIndex - 1)
    }
    // Next week
    const clickRight = () => {
        const lastIndex = weeklyContents.length - 1
        const dayLastIndex = dayContent.length - 1
        if (weekSelectIndex === lastIndex || weekSelectIndex === dayLastIndex) return
        changeWeek(weekSelectIndex + 1)
    }

    // ブラウザロード時の日付・時間
    const nowDate = new Date()
    const getNowDay = nowDate.getDay()
    const getNowDate = nowDate.getDate()

    // 一週間カレンダーの最初の日付
    let month = nowDate.getMonth() + 1
    let day = nowDate.getDate()

    const setEndOfMonth = () => {
        let x = 31
        if (month === 2) {
            x = 28
        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
            x = 30
        }
        return x
    }
    const setDate = (day: number) => {
        const x = setEndOfMonth()

        if (day <= 0) {
            day = x
        }
        if (day > x) {
            day -= x
        }
        return day
    }
    const setMonth = (day: number, month: number) => {
        const x = setEndOfMonth()

        if (day > x) {
            month += 1
        }
        return month
    }

    switch (getNowDay) {
        case 1:
            day -= 1
            break
        case 2:
            day -= 2
            break
        case 3:
            day -= 3
            break
        case 4:
            day -= 4
            break
        case 5:
            day -= 5
            break
        case 6:
            day -= 6
            break
        default:
            break
    }

    const [activeIndex, changeDay] = useState(0)
    const changeTab = (childrenIndex: number) => {
        changeDay(childrenIndex)
    }

    // 表示される日付の計算
    day = day + weekSelectIndex * 7

    const strMonth = month.toString()
    const strDay = setDate(day).toString()
    let nextMonth = setMonth(day + 6, month)
    let nextDay = setDate(day + 6)
    const strNextMonth = nextMonth.toString()
    const nextStrDay = nextDay.toString()

    // updateWeeklyContents
    type updateContentsFn = (
        leagueColor: string,
        startHour: string,
        startMin: string,
        endHour: string,
        endMin: string
    ) => void
    const updateContents: updateContentsFn = (leagueColor, startHour, startMin, endHour, endMin) => {
        const startHourInt = parseInt(startHour)
        const endHourInt = parseInt(endHour)
        const startMinInt = parseInt(startMin)
        const endMinInt = parseInt(endMin)

        const copy = [...weeklyContents]
        copy[weekSelectIndex][activeIndex].map((hour, i) =>
            hour.map((cell) => {
                if (startHourInt === endHourInt) {
                    if (startMinInt <= cell.id && cell.id < endMinInt && startHourInt === i) {
                        cell.leagueColor = leagueColor
                    }
                } else if (startHourInt < endHourInt) {
                    if (startHourInt === i && startMinInt <= cell.id) {
                        cell.leagueColor = leagueColor
                    }
                    if (startHourInt < i && i < endHourInt) {
                        cell.leagueColor = leagueColor
                    }
                    if (endHourInt === i && endMinInt > cell.id) {
                        cell.leagueColor = leagueColor
                    }
                }
                if (i === 23 && endHourInt === 24 && cell.id === 4) {
                    cell.leagueColor = leagueColor
                }
            })
        )
        setWeeklyContents(copy)
    }

    type addDayContentsFn = (hour: string, min: string, title: string, home: string, away: string) => void
    const addDayContents: addDayContentsFn = async (hour, min, title, home, away) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const time = hour + ':' + min
        const newDayContent = { id: id, time: time, title: title, home: home, away: away }

        setDayContents(
            dayContent.map((week, i) =>
                week.map((day, j) => (weekSelectIndex === i && activeIndex === j ? [...day, newDayContent] : day))
            )
        )
    }

    // deleteDayContent
    const deleteDayContent = async (id: number) => {
        setDayContents(dayContent.map((week) => week.map((day) => day.filter((low) => low.id !== id))))
    }

    const [weekModal, setWeekModal] = useState(false)
    const toggleWeekModal = () => {
        setWeekModal(!weekModal)
        if (dayModal) {
            setDayModal(!dayModal)
        }
    }

    const [dayModal, setDayModal] = useState(false)
    const toggleDayModal = () => {
        setDayModal(!dayModal)
        if (weekModal) {
            setWeekModal(!weekModal)
        }
    }

    return (
        <>
            <div className={homeStyles.selectWeek}>
                <BsChevronLeft onClick={clickLeft} />
                <h1 className={homeStyles.h1}>{strMonth + '/' + strDay + ' ~ ' + strNextMonth + '/' + nextStrDay}</h1>
                <BsChevronRight onClick={clickRight} />
            </div>
            <Weekly
                week={week}
                date={day}
                weeklyContents={weeklyContents[weekSelectIndex]}
                onClick={changeTab}
                activeIndex={activeIndex}
                setDate={setDate}
            />
            <Day
                dayContent={dayContent}
                activeIndex={activeIndex}
                week={week}
                day={day}
                weekSelectIndex={weekSelectIndex}
                onDelete={deleteDayContent}
                dayModal={dayModal}
                setDate={setDate}
            />
            {weekModal ? <Modal onUpdate={updateContents} toggleModal={toggleWeekModal} /> : null}
            {dayModal ? <DayForm addDayContents={addDayContents} toggleDayModal={toggleDayModal} /> : null}
            <div className={homeStyles.edit}>
                <span className={homeStyles.button} onClick={toggleWeekModal}>
                    週の予定を追加
                </span>
                <span className={homeStyles.button} onClick={toggleDayModal}>
                    試合詳細を追加
                </span>
            </div>
        </>
    )
}
