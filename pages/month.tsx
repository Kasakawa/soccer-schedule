import calendarStyles from '../styles/Calendar.module.css'
import CalendarRow from '../components/calendar/CalendarRow'

const Month = () => {
    const calendarContents = [
        [
            { day: '27', list: [{ text: '', cn: '' }] },
            { day: '28', list: [{ text: '', cn: '' }] },
            { day: '29', list: [{ text: '', cn: '' }] },
            { day: '30', list: [{ text: '', cn: '' }] },
            { day: '1', list: [{ text: '', cn: '' }] },
            { day: '2', list: [{ text: '', cn: '' }] },
            { day: '3', list: [{ text: '', cn: '' }] },
        ],
        [
            { day: '4', list: [{ text: '', cn: '' }] },
            { day: '5', list: [{ text: '', cn: '' }] },
            { day: '6', list: [{ text: '', cn: '' }] },
            { day: '7', list: [{ text: '', cn: '' }] },
            { day: '8', list: [{ text: '', cn: '' }] },
            { day: '9', list: [{ text: '', cn: '' }] },
            { day: '10', list: [{ text: '', cn: '' }] },
        ],
        [
            { day: '11', list: [{ text: '', cn: '' }] },
            { day: '12', list: [{ text: '', cn: '' }] },
            { day: '13', list: [{ text: '', cn: '' }] },
            { day: '14', list: [{ text: '', cn: '' }] },
            { day: '15', list: [{ text: '', cn: '' }] },
            { day: '16', list: [{ text: '', cn: '' }] },
            { day: '17', list: [{ text: '', cn: '' }] },
        ],
        [
            { day: '18', list: [{ text: '', cn: '' }] },
            { day: '19', list: [{ text: '', cn: '' }] },
            { day: '20', list: [{ text: '', cn: '' }] },
            {
                day: '21',
                list: [
                    { text: '五輪', cn: 'olympic' },
                    { text: 'J1', cn: 'j' },
                ],
            },
            { day: '22', list: [{ text: '', cn: '' }] },
            { day: '23', list: [{ text: '', cn: '' }] },
            { day: '24', list: [{ text: '', cn: '' }] },
        ],
        [
            { day: '25', list: [{ text: '', cn: '' }] },
            { day: '26', list: [{ text: '', cn: '' }] },
            { day: '27', list: [{ text: '', cn: '' }] },
            { day: '28', list: [{ text: '', cn: '' }] },
            { day: '29', list: [{ text: '', cn: '' }] },
            { day: '30', list: [{ text: '', cn: '' }] },
            { day: '31', list: [{ text: '', cn: '' }] },
        ],
    ]

    return (
        <>
            <h1 className={calendarStyles.h1}>7月</h1>
            <table className={calendarStyles.table}>
                <thead>
                    <tr>
                        <td>日</td>
                        <td>月</td>
                        <td>火</td>
                        <td>水</td>
                        <td>木</td>
                        <td>金</td>
                        <td>土</td>
                    </tr>
                </thead>
                <tbody>
                    {/* {calendarContents.map((calendarRowContents) => (
                        <CalendarRow calendarRowContents={calendarRowContents} />
                    ))} */}
                </tbody>
            </table>
        </>
    )
}

export default Month
