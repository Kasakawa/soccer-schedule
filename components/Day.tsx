import DayStyles from '../styles/Day.module.css'

type dayContentProps = {
    activeIndex: number
    dayContent: {
        id: number
        time: string
        title: string
        home: string
        away: string
    }[][][]
    week: string[]
    day: number
    weekSelectIndex: number
}

const Day = ({ dayContent, activeIndex, week, day, weekSelectIndex }: dayContentProps) => {
    return (
        <>
            <h1 className={DayStyles.h1}>
                {day + activeIndex <= 30 ? day + activeIndex : day + activeIndex - 30}({week[activeIndex]})
            </h1>
            <table className={DayStyles.table}>
                <tbody>
                    {dayContent[weekSelectIndex][activeIndex].map((content) => (
                        <tr key={content.id}>
                            <td className={DayStyles.time}>{content.time}</td>
                            <td className={DayStyles.league}>{content.title}</td>
                            <td>
                                {content.home}
                                <br />
                                {content.away}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Day
