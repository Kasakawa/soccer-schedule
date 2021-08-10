import tableStyles from '../styles/Table.module.css'

const Table = () => {
    const startDay = 8

    const content = [
        {
            time: 4,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: 'euro',
            friClass: 'eng',
            satClass: 'esp',
        },
        {
            time: 5,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: 'euro',
            friClass: 'eng',
            satClass: 'esp',
        },
        {
            time: 6,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: '',
        },
        {
            time: 7,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: '',
        },
        {
            time: 8,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: '',
        },
        {
            time: 9,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: '',
        },
        {
            time: 10,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: '',
        },
        {
            time: 11,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: '',
        },
        {
            time: 12,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: '',
        },
        {
            time: 13,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: '',
        },
        {
            time: 14,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: 'j',
        },
        {
            time: 15,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: 'j',
        },
        {
            time: 16,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: '',
        },
        {
            time: 17,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: '',
        },
        {
            time: 18,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: '',
        },
        {
            time: 19,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: 'j',
            friClass: 'j',
            satClass: 'j',
        },
        {
            time: 20,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: 'j',
            friClass: 'j',
            satClass: 'multi',
        },
        {
            time: 21,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: 'multi',
        },
        {
            time: 22,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: '',
        },
        {
            time: 23,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: 'eng',
        },
        {
            time: 24,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: '',
            satClass: 'eng',
        },
        {
            time: 25,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: 'ger',
            satClass: '',
        },
        {
            time: 26,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: 'ger',
            satClass: '',
        },
        {
            time: 27,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: 'multi',
            satClass: '',
        },
        {
            time: 28,
            sunClass: '',
            monClass: '',
            tueClass: '',
            wedClass: '',
            thuClass: '',
            friClass: 'multi',
            satClass: '',
        },
    ]

    return (
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th className={tableStyles.time}>時</th>
                    <td>{startDay}(日)</td>
                    <td>{startDay + 1}(月)</td>
                    <td>{startDay + 2}(火)</td>
                    <td>{startDay + 3}(水)</td>
                    <td>{startDay + 4}(木)</td>
                    <td>{startDay + 5}(金)</td>
                    <td>{startDay + 6}(土)</td>
                </tr>
            </thead>
            <tbody>
                {content.map((row) => (
                    <tr key={row.time}>
                        <th>{row.time}</th>
                        <td className={tableStyles[row.sunClass]}></td>
                        <td className={tableStyles[row.monClass]}></td>
                        <td className={tableStyles[row.tueClass]}></td>
                        <td className={tableStyles[row.wedClass]}></td>
                        <td className={tableStyles[row.thuClass]}>{row.thuClass}</td>
                        <td className={tableStyles[row.friClass]}>{row.friClass}</td>
                        <td className={tableStyles[row.satClass]}>{row.satClass}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
