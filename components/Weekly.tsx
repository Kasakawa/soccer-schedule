import WeeklyStyles from '../styles/Weekly.module.css'
import WeeklyBody from './WeeklyBody'
import WeeklyThead from './WeeklyThead'

type onChangeProps = {
    onChange: (childrenIndex: number) => void
    activeIndex: number
    week: string[]
    day: number
    getNowDate: number
    weekSelectIndex: number
    oneWeekContent: {
        time: number
        cell: {
            dayOfTheWeek: string
            hour: string
            thirtyMin1: string
            thirtyMin2: string
            fifteenMin1: string
            fifteenMin2: string
            fifteenMin3: string
            fifteenMin4: string
        }[]
    }[][]
}

const Table = ({ onChange, activeIndex, week, day, getNowDate, weekSelectIndex, oneWeekContent }: onChangeProps) => {
    return (
        <table className={WeeklyStyles.table}>
            <thead>
                <tr>
                    <th></th>
                    {week.map((date, i) => (
                        <WeeklyThead
                            i={i}
                            key={i}
                            onChange={onChange}
                            active={i === activeIndex}
                            today={day + i === getNowDate}
                            day={day + i}
                            date={date}
                        />
                    ))}
                </tr>
            </thead>

            <WeeklyBody oneWeekContent={oneWeekContent[weekSelectIndex]} />

            <tfoot>
                <tr>
                    <th></th>
                    {week.map((date, i) => (
                        <WeeklyThead
                            i={i}
                            key={i}
                            onChange={onChange}
                            active={i === activeIndex}
                            today={day + i === getNowDate}
                            day={day + i}
                            date={date}
                        />
                    ))}
                </tr>
            </tfoot>
        </table>
    )
}

export default Table
