import calendarStyles from '../../styles/Calendar.module.css'

type itemProps = {
    text: string
    cn: string
}

const CalendarItem = ({ text, cn }: itemProps) => {
    return <li className={calendarStyles[cn]}>{text}</li>
}

export default CalendarItem
