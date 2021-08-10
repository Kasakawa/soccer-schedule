import CalendarData from './CalendarData'

type calendarRowProps = {
    calendarRowContents: {
        day: string
        list: {
            text: string
            cn: string
        }[]
    }[]
}

const CalendarRow = ({ calendarRowContents }: calendarRowProps) => {
    return (
        <tr>
            {calendarRowContents.map((calendarContent) => (
                <CalendarData calendarContent={calendarContent} />
            ))}
        </tr>
    )
}

export default CalendarRow
