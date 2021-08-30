import { useState } from 'react'
import tableStyles from '../styles/Table.module.css'
import TableData from './TableData'

type onChangeProps = {
    onChange: (childrenIndex: number) => void
    activeIndex: number
    week: string[]
    day: number
    getNowDate: number
}

const Table = ({ onChange, activeIndex, week, day, getNowDate }: onChangeProps) => {
    const content = [
        {
            time: 4,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: 'international',
            thuLeague: '欧州',
            friClass: 'international',
            friLeague: '欧州',
            satClass: '',
            satLeague: '',
        },
        {
            time: 5,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: 'international',
            thuLeague: '欧州',
            friClass: 'international',
            friLeague: 'WC',
            satClass: '',
            satLeague: '',
        },
        {
            time: 6,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: '',
            thuLeague: '',
            friClass: 'international',
            friLeague: '南米',
            satClass: '',
            satLeague: '',
        },
        {
            time: 7,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: '',
            thuLeague: '',
            friClass: 'international',
            friLeague: '南米',
            satClass: '',
            satLeague: '',
        },
        {
            time: 8,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: '',
            thuLeague: '',
            friClass: '',
            friLeague: '',
            satClass: '',
            satLeague: '',
        },
        {
            time: 9,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: '',
            thuLeague: '',
            friClass: 'international',
            friLeague: 'WC',
            satClass: '',
            satLeague: '',
        },
        {
            time: 10,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: '',
            thuLeague: '',
            friClass: 'international',
            friLeague: 'WC',
            satClass: '',
            satLeague: '',
        },
        {
            time: 11,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: '',
            thuLeague: '',
            friClass: 'international',
            friLeague: 'WC',
            satClass: '',
            satLeague: '',
        },
        {
            time: 12,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: '',
            thuLeague: '',
            friClass: 'international',
            friLeague: 'WC',
            satClass: '',
            satLeague: '',
        },
        {
            time: 13,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: '',
            thuLeague: '',
            friClass: 'international',
            friLeague: '北中米',
            satClass: '',
            satLeague: '',
        },
        {
            time: 14,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: '',
            thuLeague: '',
            friClass: '',
            friLeague: '',
            satClass: '',
            satLeague: '',
        },
        {
            time: 15,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: '',
            thuLeague: '',
            friClass: '',
            friLeague: '',
            satClass: '',
            satLeague: '',
        },
        {
            time: 16,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: '',
            thuLeague: '',
            friClass: '',
            friLeague: '',
            satClass: '',
            satLeague: '',
        },
        {
            time: 17,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: '',
            thuLeague: '',
            friClass: '',
            friLeague: '',
            satClass: '',
            satLeague: '',
        },
        {
            time: 18,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: '',
            thuLeague: '',
            friClass: '',
            friLeague: '',
            satClass: '',
            satLeague: '',
        },
        {
            time: 19,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: 'j',
            wedLeague: 'J杯',
            thuClass: 'international',
            thuLeague: 'アジア',
            friClass: '',
            friLeague: '',
            satClass: '',
            satLeague: '',
        },
        {
            time: 20,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: 'j',
            wedLeague: 'J杯',
            thuClass: 'international',
            thuLeague: 'アジア',
            friClass: '',
            friLeague: '',
            satClass: '',
            satLeague: '',
        },
        {
            time: 21,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: 'international',
            thuLeague: 'アジア',
            friClass: '',
            friLeague: '',
            satClass: '',
            satLeague: '',
        },
        {
            time: 22,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: '',
            thuLeague: '',
            friClass: '',
            friLeague: '',
            satClass: 'international',
            satLeague: '欧州',
        },
        {
            time: 23,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: 'international',
            wedLeague: '欧州',
            thuClass: '',
            thuLeague: '',
            friClass: '',
            friLeague: '',
            satClass: 'international',
            satLeague: '欧州',
        },
        {
            time: 24,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: 'international',
            wedLeague: '欧州',
            thuClass: '',
            thuLeague: '',
            friClass: '',
            friLeague: '',
            satClass: '',
            satLeague: '',
        },
        {
            time: 25,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: 'international',
            thuLeague: '欧州',
            friClass: '',
            friLeague: '',
            satClass: 'international',
            satLeague: '欧州',
        },
        {
            time: 26,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: '',
            wedLeague: '',
            thuClass: 'international',
            thuLeague: '欧州',
            friClass: '',
            friLeague: '',
            satClass: 'international',
            satLeague: '欧州',
        },
        {
            time: 27,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: 'international',
            wedLeague: '欧州',
            thuClass: 'international',
            thuLeague: '欧州',
            friClass: '',
            friLeague: '',
            satClass: 'international',
            satLeague: '欧州',
        },
        {
            time: 28,
            sunClass: '',
            monClass: '',
            tueClass: '',
            tueLeague: '',
            wedClass: 'international',
            wedLeague: '欧州',
            thuClass: 'international',
            thuLeague: '欧州',
            friClass: '',
            friLeague: '',
            satClass: 'international',
            satLeague: '欧州',
        },
    ]

    return (
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th></th>
                    {week.map((date, i) => (
                        <TableData
                            i={i}
                            key={i}
                            onChange={onChange}
                            active={i === activeIndex}
                            today={i === getNowDate}
                            day={day + i}
                            date={date}
                        />
                    ))}
                </tr>
            </thead>
            <tbody>
                {content.map((row) => (
                    <tr key={row.time}>
                        <th>{row.time}</th>
                        <td className={tableStyles[row.sunClass]}></td>
                        <td className={tableStyles[row.monClass]}></td>
                        <td className={tableStyles[row.tueClass]}></td>
                        <td className={tableStyles[row.wedClass]}>{row.wedLeague}</td>
                        <td className={tableStyles[row.thuClass]}>{row.thuLeague}</td>
                        <td className={tableStyles[row.friClass]}>{row.friLeague}</td>
                        <td className={tableStyles[row.satClass]}>{row.satLeague}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                    {week.map((date, i) => (
                        <TableData
                            i={i}
                            key={i}
                            onChange={onChange}
                            active={i === activeIndex}
                            today={i === getNowDate}
                            day={day + i}
                            date={date}
                        />
                    ))}
                </tr>
            </tfoot>
        </table>
    )
}

export default Table
