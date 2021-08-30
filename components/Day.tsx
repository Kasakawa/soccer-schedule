import DayStyles from '../styles/Day.module.css'

type dayContentProps = {
    activeIndex: number
    dayContent: {
        id: number
        time: string
        title: string
        games: string[]
    }[][]
    week: string[]
    day: number
}

const Day = ({ dayContent, activeIndex, week, day }: dayContentProps) => {
    return (
        <>
            <h1 className={DayStyles.h1}>
                {day + activeIndex <= 31 ? day + activeIndex : day + activeIndex - 31}({week[activeIndex]})
            </h1>
            <table className={DayStyles.table}>
                <tbody>
                    {dayContent[activeIndex].map((content) => (
                        <tr key={content.id}>
                            <td className={DayStyles.time}>{content.time}</td>
                            <td className={DayStyles.league}>{content.title}</td>
                            <td>
                                <ul>
                                    {content.games.map((game) => (
                                        <li key={game}>{game}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Day
