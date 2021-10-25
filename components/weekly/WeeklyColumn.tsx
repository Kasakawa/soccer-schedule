import weeklyStyles from '../../styles/Weekly.module.css'

type dayContentsProps = {
    dayContents: {
        id: number
        leagueColor: string
    }[][]
}

const WeeklyColumn = ({ dayContents }: dayContentsProps) => {
    return (
        <div className={weeklyStyles.column}>
            {dayContents.map((game, i) => (
                <div className={weeklyStyles.game} key={i}>
                    {game.map((cell) => (
                        <div className={`${weeklyStyles[cell.leagueColor]} ${weeklyStyles.cell}`} key={cell.id}></div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default WeeklyColumn
