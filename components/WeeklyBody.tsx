import tableStyles from '../styles/Weekly.module.css'
import WeeklyCell from './WeeklyCell'

type oneWeekContentProps = {
    oneWeekContent: {
        time: number
        cell: {
            dayOfTheWeek: string
            hour: string
            thirtyMin1: string
            thirtyMin2: string
            fifteenMin1: string
            fifteenMin2: string
        }[]
    }[]
}

const WeeklyBody = ({ oneWeekContent }: oneWeekContentProps) => {
    return (
        <tbody>
            {oneWeekContent.map((row) => (
                <tr key={row.time}>
                    <th>{row.time}</th>
                    {row.cell.map((cell) => (
                        <WeeklyCell key={cell.dayOfTheWeek} cell={cell} />
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

export default WeeklyBody
