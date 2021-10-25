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
    onDelete: (id: number) => void
    dayModal: boolean
    setDate: (day: number) => number
}

const Day = ({ dayContent, activeIndex, week, day, weekSelectIndex, onDelete, dayModal, setDate }: dayContentProps) => {
    return (
        <>
            <h1 className={DayStyles.h1}>
                {setDate(day + activeIndex)}({week[activeIndex]})
            </h1>
            <table className={DayStyles.table}>
                <tbody>
                    {dayContent[weekSelectIndex][activeIndex].length > 0 ? (
                        dayContent[weekSelectIndex][activeIndex].map((content) => (
                            <tr key={content.id}>
                                <td className={DayStyles.time}>{content.time}</td>
                                <td className={DayStyles.league}>{content.title}</td>
                                <td>
                                    {content.home}
                                    <br />
                                    {content.away}
                                </td>
                                {dayModal ? (
                                    <td className={DayStyles.delete}>
                                        <button onClick={() => onDelete(content.id)}>削除</button>
                                    </td>
                                ) : null}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td>本日の試合はありません</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Day
