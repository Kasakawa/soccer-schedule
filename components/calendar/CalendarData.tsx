import CalendarItem from './CalendarItem'

type calendarContentProps = {
    calendarContent: {
        day: string
        list: {
            text: string
            cn: string
        }[]
    }
}

const CalendarData = ({ calendarContent }: calendarContentProps) => {
    return (
        <td>
            <p>{calendarContent.day}</p>
            <ul>
                {/* {calendarContent.list.map((item: { text: string; cn: string }) => (
                    <CalendarItem text={item.text} cn={item.cn} />
                ))} */}
            </ul>
        </td>
    )
}

export default CalendarData
