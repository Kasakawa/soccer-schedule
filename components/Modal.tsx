import { useState } from 'react'
import modalStyles from '../styles/Modal.module.css'

type modalProps = {
    onUpdate: (leagueColor: string, startHour: string, startMin: string, endHour: string, endMin: string) => void
    toggleModal: () => void
}

const Modal = ({ onUpdate, toggleModal }: modalProps) => {
    const [leagueColor, setLeagueColor] = useState('')
    const [startHour, setStartHour] = useState('0')
    const [startMin, setStartMiin] = useState('1')
    const [endHour, setEndHour] = useState('0')
    const [endMin, setEndMin] = useState('1')

    return (
        <>
            <div className={modalStyles.background}></div>
            <div className={modalStyles.modal}>
                <div>
                    <select
                        name=""
                        id=""
                        onChange={(e) => {
                            setStartHour(e.target.value)
                        }}
                    >
                        <option value="0">4</option>
                        <option value="1">5</option>
                        <option value="2">6</option>
                        <option value="3">7</option>
                        <option value="4">8</option>
                        <option value="5">9</option>
                        <option value="6">10</option>
                        <option value="7">11</option>
                        <option value="8">12</option>
                        <option value="9">13</option>
                        <option value="10">14</option>
                        <option value="11">15</option>
                        <option value="12">16</option>
                        <option value="13">17</option>
                        <option value="14">18</option>
                        <option value="15">19</option>
                        <option value="16">20</option>
                        <option value="17">21</option>
                        <option value="18">22</option>
                        <option value="19">23</option>
                        <option value="20">24</option>
                        <option value="21">25</option>
                        <option value="22">26</option>
                        <option value="23">27</option>
                    </select>
                    <select
                        name=""
                        id=""
                        onChange={(e) => {
                            setStartMiin(e.target.value)
                        }}
                    >
                        <option value="1">00</option>
                        <option value="2">15</option>
                        <option value="3">30</option>
                        <option value="4">45</option>
                    </select>
                    <span> ~ </span>
                    <select
                        name=""
                        id=""
                        onChange={(e) => {
                            setEndHour(e.target.value)
                        }}
                    >
                        <option value="0">4</option>
                        <option value="1">5</option>
                        <option value="2">6</option>
                        <option value="3">7</option>
                        <option value="4">8</option>
                        <option value="5">9</option>
                        <option value="6">10</option>
                        <option value="7">11</option>
                        <option value="8">12</option>
                        <option value="9">13</option>
                        <option value="10">14</option>
                        <option value="11">15</option>
                        <option value="12">16</option>
                        <option value="13">17</option>
                        <option value="14">18</option>
                        <option value="15">19</option>
                        <option value="16">20</option>
                        <option value="17">21</option>
                        <option value="18">22</option>
                        <option value="19">23</option>
                        <option value="20">24</option>
                        <option value="21">25</option>
                        <option value="22">26</option>
                        <option value="23">27</option>
                        <option value="24">28</option>
                    </select>
                    <select
                        name=""
                        id=""
                        onChange={(e) => {
                            setEndMin(e.target.value)
                        }}
                    >
                        <option value="1">00</option>
                        <option value="2">15</option>
                        <option value="3">30</option>
                        <option value="4">45</option>
                    </select>
                </div>
                <select
                    name=""
                    id="league"
                    onChange={(e) => {
                        setLeagueColor(e.target.value)
                    }}
                >
                    <option value="">国を選択してください</option>
                    <option value="eng">イングランド</option>
                    <option value="ger">ドイツ</option>
                    <option value="esp">スペイン</option>
                    <option value="j">日本</option>
                    <option value="international">国際試合</option>
                    <option value="multi">その他</option>
                </select>

                <div className={modalStyles.button}>
                    <button onClick={() => onUpdate(leagueColor, startHour, startMin, endHour, endMin)}>追加</button>
                    <button onClick={toggleModal}>キャンセル</button>
                </div>
            </div>
        </>
    )
}

export default Modal
