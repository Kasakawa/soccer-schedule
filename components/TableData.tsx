import React from 'react'
import tableStyles from '../styles/Table.module.css'

type tableDataProps = {
    active: boolean
    today: boolean
    onChange: (childrenIndex: number) => void
    day: number
    date: string
    i: number
}

const TableData = ({ active, onChange, day, date, i, today }: tableDataProps) => {
    const classNames = today ? tableStyles.today : ''

    return (
        <>
            <td
                className={`${today ? tableStyles.today : ''} ${active ? tableStyles.highlight : ''}`}
                onClick={() => onChange(i)}
            >
                {(day <= 31 ? day : day - 31) + '(' + date + ')'}
            </td>
        </>
    )
}

export default TableData
