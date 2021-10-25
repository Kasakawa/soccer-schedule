import { useState } from 'react'
import formStyles from '../styles/DayForm.module.css'

type dayFormProps = {
    addDayContents: (hour: string, min: string, title: string, home: string, away: string) => void
    toggleDayModal: () => void
}
const DayForm = ({ addDayContents, toggleDayModal }: dayFormProps) => {
    const [hour, setHour] = useState('4')
    const [min, setMin] = useState('00')
    const [title, setTitle] = useState('')
    const [home, setHome] = useState('')
    const [away, setAway] = useState('')

    const onSubmit = () => {
        addDayContents(hour, min, title, home, away)

        setTitle('')
        setHome('')
        setAway('')
    }

    return (
        <div className={formStyles.form}>
            <select
                name=""
                id=""
                onChange={(e) => {
                    setHour(e.target.value)
                }}
            >
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
            </select>
            <select
                name=""
                id=""
                onChange={(e) => {
                    setMin(e.target.value)
                }}
            >
                <option value="00">00</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
            </select>
            <div>
                <label htmlFor="">リーグ : </label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
            </div>
            <label htmlFor="">ホーム : </label>
            <input
                type="text"
                value={home}
                onChange={(e) => {
                    setHome(e.target.value)
                }}
            />
            <div>
                <label htmlFor="">アウェイ : </label>
                <input
                    type="text"
                    value={away}
                    onChange={(e) => {
                        setAway(e.target.value)
                    }}
                />
            </div>
            <div className={formStyles.button}>
                <button onClick={onSubmit}>追加</button>
                <button onClick={toggleDayModal}>キャンセル</button>
            </div>
        </div>
    )
}

export default DayForm
