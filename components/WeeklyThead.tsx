import React from 'react'
import WeeklyStyles from '../styles/Weekly.module.css'

type tableDataProps = {
    active: boolean
    today: boolean
    onChange: (childrenIndex: number) => void
    day: number
    date: string
    i: number
}

const TableData = ({ active, onChange, day, date, i, today }: tableDataProps) => {
    return (
        <>
            <td
                className={`${today ? WeeklyStyles.today : ''} ${active ? WeeklyStyles.highlight : ''}`}
                onClick={() => onChange(i)}
            >
                {(day <= 30 ? day : day - 30) + '(' + date + ')'}
            </td>
        </>
    )
}

export default TableData
