import { useEffect, useState } from 'react'
import PlayerSelector from './components/PlayerSelector'

//import { players } from './data/players'

import StatCard from './components/StatsCard'
import ScoreTrend from './components/ScoreTrend'
import ScoreDistribution from './components/ScoreDistribution'
import PinsPerBall from './components/PinsPerBall'
import FrameEfficiency from './components/FrameEfficiency'
import CommonLeaves from './components/CommonLeaves'
import PinHeatmap from './components/PinHeatmap'
import Records from './components/Records'
import PressureStats from './components/PressureStats'


import { supabase } from './lib/supabase'


export default function App() {
   // const [playerId, setPlayerId] = useState(players[0].id)

    const [players, setPlayers] = useState([])
    const [playerId, setPlayerId] = useState(null)

    //const player = players.find(p => p.id === playerId)

    useEffect(() => {
        async function loadPlayers() {
            const { data, error } = await supabase
                .from('players')
                .select('*')
                .order('name')

            if (!error && data.length) {
                setPlayers(data)
                setPlayerId(data[0].id)
            }
        }

        loadPlayers()
    }, [])


    return (
        <div className="app">
            <div className="header">
                <h1>The Gutter Gang Dashboard</h1>

                <PlayerSelector
                    players={players}
                    selectedId={playerId}
                    onChange={setPlayerId}
                />
            </div>

            {/*<div className="stats-grid">*/}
            {/*    <StatCard label="Average (Last 10)" value={player.stats.average} />*/}
            {/*    <StatCard label="High Game" value={player.stats.highGame} />*/}
            {/*    <StatCard label="High Series" value={player.stats.highSeries} />*/}
            {/*    <StatCard label="Games Played" value={player.stats.gamesPlayed} />*/}
            {/*    <StatCard label="Strike %" value={player.stats.strikePct} />*/}
            {/*    <StatCard label="Spare %" value={player.stats.sparePct} />*/}
            {/*    <StatCard label="Triple-Clean %" value={player.stats.tripleCleanPct} />*/}
            {/*    <StatCard label="Pins Per Ball" value={player.stats.pinsPerBall} />*/}
            {/*</div>*/}

            <div className="main-grid">
                <ScoreTrend />
                <ScoreDistribution />
            </div>

            <div className="secondary-grid">
                <PinsPerBall />
                <FrameEfficiency />
            </div>

            <div className="secondary-grid">
                <PinHeatmap />
                <CommonLeaves />
            </div>

            <div className="secondary-grid">
                <Records />
                <PressureStats />
            </div>
        </div>
    )
}
