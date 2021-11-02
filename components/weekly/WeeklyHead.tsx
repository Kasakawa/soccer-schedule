import weeklyStyles from '../../styles/Weekly.module.css'

type weeklyHeadProps = {
    week: string[]
    onClick: (childrenIndex: number) => void
    activeIndex: number
    date: number
    month: number
    setDate: (day: number, month: number) => number
}

const WeeklyHead = ({ week, onClick, activeIndex, date, month, setDate }: weeklyHeadProps) => {
    return (
        <div className={weeklyStyles.head}>
            <div className={weeklyStyles.headCell}></div>
            {week.map((week: string, i: number) => {
                const strDate = setDate(date + i, month)

                return (
                    <div
                        className={`${activeIndex === i ? weeklyStyles.highlight : weeklyStyles.th}`}
                        onClick={() => onClick(i)}
                        key={i}
                    >
                        {strDate + '(' + week + ')'}
                    </div>
                )
            })}
        </div>
    )
}

export default WeeklyHead
