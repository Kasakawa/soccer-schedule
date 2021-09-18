import weeklyStyles from '../styles/Weekly.module.css'

type cellProps = {
    cell: {
        dayOfTheWeek: string
        hour: string
        thirtyMin1: string
        thirtyMin2: string
        fifteenMin1: string
        fifteenMin2: string
        fifteenMin3: string
        fifteenMin4: string
    }
}

const WeeklyCell = ({ cell }: cellProps) => {
    return (
        <td>
            <div className={`${weeklyStyles[cell.hour]} ${weeklyStyles.hour}`}>
                <div className={`${weeklyStyles[cell.thirtyMin1]} ${weeklyStyles.thirtyMin}`}>
                    <div className={`${weeklyStyles[cell.fifteenMin1]} ${weeklyStyles.fifteenMin}`}></div>
                    <div className={`${weeklyStyles[cell.fifteenMin2]} ${weeklyStyles.fifteenMin}`}></div>
                </div>
                <div className={`${weeklyStyles[cell.thirtyMin2]} ${weeklyStyles.thirtyMin}`}>
                    <div className={`${weeklyStyles[cell.fifteenMin3]} ${weeklyStyles.fifteenMin}`}></div>
                    <div className={`${weeklyStyles[cell.fifteenMin4]} ${weeklyStyles.fifteenMin}`}></div>
                </div>
            </div>
        </td>
    )
}

export default WeeklyCell
