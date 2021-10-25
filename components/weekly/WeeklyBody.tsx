import WeeklyColumn from './WeeklyColumn'
import weeklyStyles from '../../styles/Weekly.module.css'

type weeklyContentsProps = {
    weeklyContents: {
        id: number
        leagueColor: string
    }[][][]
}

const WeeklyBody = ({ weeklyContents }: weeklyContentsProps) => {
    const times = []
    for (let i = 0; i < 24; i++) {
        const time = i + 4
        times.push(
            <div className={weeklyStyles.time} key={i}>
                {time}
            </div>
        )
    }

    return (
        <div className={weeklyStyles.body}>
            <div className={weeklyStyles.times}>{times}</div>
            {weeklyContents.map((dayContents, i) => (
                <WeeklyColumn dayContents={dayContents} key={i} />
            ))}
        </div>
    )
}

export default WeeklyBody
