import WeeklyHead from './WeeklyHead'
import WeeklyBody from './WeeklyBody'
import weeklyStyles from '../../styles/Weekly.module.css'

type weeklyProps = {
    week: string[]
    weeklyContents: {
        id: number
        leagueColor: string
    }[][][]
    onClick: (childrenIndex: number) => void
    activeIndex: number
    date: number
    month: number
    setDate: (day: number, month: number) => number
}

const Weekly = ({ week, weeklyContents, onClick, activeIndex, date, month, setDate }: weeklyProps) => {
    return (
        <div className={weeklyStyles.weekly}>
            <WeeklyHead
                week={week}
                date={date}
                month={month}
                setDate={setDate}
                onClick={onClick}
                activeIndex={activeIndex}
            />
            <WeeklyBody weeklyContents={weeklyContents} />
            <WeeklyHead
                week={week}
                date={date}
                month={month}
                setDate={setDate}
                onClick={onClick}
                activeIndex={activeIndex}
            />
        </div>
    )
}

export default Weekly
