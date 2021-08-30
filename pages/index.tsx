import { useState } from 'react'
import homeStyles from '../styles/Home.module.css'
import Table from '../components/Table'
import Day from '../components/Day'

export default function Home() {
    const week = ['日', '月', '火', '水', '木', '金', '土']

    const dayContent = [
        [
            {
                id: 1,
                time: '',
                title: '',
                games: ['試合はありません'],
            },
        ],
        [
            {
                id: 1,
                time: '',
                title: '',
                games: ['試合はありません'],
            },
        ],
        [
            {
                id: 1,
                time: '',
                title: '',
                games: ['試合はありません'],
            },
        ],
        [
            {
                id: 1,
                time: '16:00',
                title: 'J杯',
                games: ['札幌 vs FC東京', '鹿島 vs 名古屋', 'C大阪 vs G大阪', '浦和 vs 川崎'],
            },
            {
                id: 2,
                time: '23:00',
                title: '欧州',
                games: ['カザフスタン vs ウクライナ'],
            },
            {
                id: 3,
                time: '3:45',
                title: '欧州',
                games: [
                    'スロベニア vs スロバキア',
                    'デンマーク vs スコットランド',
                    'トルコ vs モンテネグロ',
                    'ノルウェー vs オランダ',
                    'フェロー諸島 vs イスラエル',
                    'フランス vs ボスニアヘルツェゴビナ',
                    'ポルトガル vs アイルランド',
                    'マルタ vs キプロス',
                    'モルドヴァ vs オーストリア',
                    'ラトビア vs ジブラルタル',
                    'ルクセンブルク vs アゼルバイジャン',
                    'ロシア vs クロアチア',
                ],
            },
        ],
        [
            {
                id: 1,
                time: '3:45',
                title: '欧州',
                games: [
                    'スロベニア vs スロバキア',
                    'デンマーク vs スコットランド',
                    'トルコ vs モンテネグロ',
                    'ノルウェー vs オランダ',
                    'フェロー諸島 vs イスラエル',
                    'フランス vs ボスニアヘルツェゴビナ',
                    'ポルトガル vs アイルランド',
                    'マルタ vs キプロス',
                    'モルドヴァ vs オーストリア',
                    'ラトビア vs ジブラルタル',
                    'ルクセンブルク vs アゼルバイジャン',
                    'ロシア vs クロアチア',
                ],
            },
            {
                id: 2,
                time: '19:10',
                title: 'アジア',
                games: ['日本 vs オマーン'],
            },
            {
                id: 3,
                time: '21:00',
                title: 'アジア',
                games: ['韓国 vs イラク'],
            },
            {
                id: 4,
                time: '1:00',
                title: '欧州',
                games: ['ジョージア vs コソボ'],
            },
            {
                id: 5,
                time: '3:45',
                title: '欧州',
                games: [
                    'アイスランド vs ルーマニア',
                    'アンドラ vs サンタマリア',
                    'イタリア vs ブルガリア',
                    'エストニア vs ベルギー',
                    'スウェーデン vs スペイン',
                    'チェコ vs ベラルーシ',
                    'ハンガリー vs イングランド',
                    'ポーランド vs アルバニア',
                    'リトアニア vs 北アイルランド',
                    'リヒテンシュタイン vs ドイツ',
                    '北マケドニア vs アルメニア',
                ],
            },
        ],
        [
            {
                id: 1,
                time: '3:45',
                title: '欧州',
                games: [
                    'アイスランド vs ルーマニア',
                    'アンドラ vs サンタマリア',
                    'イタリア vs ブルガリア',
                    'エストニア vs ベルギー',
                    'スウェーデン vs スペイン',
                    'チェコ vs ベラルーシ',
                    'ハンガリー vs イングランド',
                    'ポーランド vs アルバニア',
                    'リトアニア vs 北アイルランド',
                    'リヒテンシュタイン vs ドイツ',
                    '北マケドニア vs アルメニア',
                ],
            },
            {
                id: 2,
                time: '5:00',
                title: '南米',
                games: ['ボリビア vs コロンビア'],
            },
            {
                id: 3,
                time: '6:00',
                title: '南米',
                games: ['エクアドル vs パラグアイ'],
            },
            {
                id: 4,
                time: '9:00',
                title: '南米',
                games: ['ベネズエラ vs アルゼンチン'],
            },
            {
                id: 5,
                time: '9:05',
                title: '北中米',
                games: ['カナダ vs ホンジュラス'],
            },
            {
                id: 6,
                time: '10:00',
                title: '南米',
                games: ['チリ vs ブラジル', 'ペルー vs ウルグアイ'],
            },
            {
                id: 7,
                time: '10:05',
                title: '北中米',
                games: ['パナマ vs コスタリカ'],
            },
            {
                id: 8,
                time: '11:00',
                title: '北中米',
                games: ['メキシコ vs ジャマイカ', 'エルサルバドル vs アメリカ'],
            },
        ],
        [
            {
                id: 1,
                time: '22:00',
                title: '欧州',
                games: ['フィンランド vs カザフスタン'],
            },
            {
                id: 2,
                time: '1:00',
                title: '欧州',
                games: [
                    'アイルランド vs アゼルバイジャン',
                    'キプロス vs ロシア',
                    'スロベニア vs マルタ',
                    'セルビア vs ルクセンブルク',
                    'ラトビア vs ノルウェー',
                ],
            },
            {
                id: 3,
                time: '3:45',
                title: '欧州',
                games: [
                    'イスラエル vs オーストリア',
                    'ウクライナ vs フランス',
                    'オランダ vs モンテネグロ',
                    'ジブラルタル vs トルコ',
                    'スコットランド vs モルドヴァ',
                    'スロバキア vs クロアチア',
                    'フェロー諸島 vs デンマーク',
                ],
            },
        ],
    ]

    const nowDate = new Date()
    const getNowDate = nowDate.getDay()

    const startDay = new Date('August 29')
    const day = startDay.getDate()

    const [activeIndex, changeActive] = useState(getNowDate)

    const changeTab = (childrenIndex: number) => {
        changeActive(childrenIndex)
    }

    return (
        <>
            <h1 className={homeStyles.h1}>8/29 ~ 9/4</h1>
            <Table onChange={changeTab} activeIndex={activeIndex} week={week} day={day} getNowDate={getNowDate} />
            <Day dayContent={dayContent} activeIndex={activeIndex} week={week} day={day} />
        </>
    )
}
