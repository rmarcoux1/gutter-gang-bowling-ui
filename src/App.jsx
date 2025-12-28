import { useEffect, useState } from 'react'
import PlayerSelector from './components/PlayerSelector'
import { useGames } from './hooks/useGames'

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
    const { games, loading} = useGames(playerId)


    const average = (games.reduce((sum, g) => sum + g.total_score, 0) / games.length).toFixed(2)
    const highScore = games.reduce((max, g) => Math.max(max, g.total_score), 0)
    const gamesPlayed = games.length
    const totalMoneyOwed = games.reduce((sum, g) => sum + (g.money_owed || 0), 0)
    const totalOrangePins = games.reduce((sum, g) => sum + (g.orange_pins || 0), 0)

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

            <div className="stats-grid">
                <StatCard label="Average (Last 10)" value={average}/>
                <StatCard label="High Game" value={highScore}/>

                {/*<StatCard label="High Series" value={player.stats.highSeries} />*/}
                {/*<StatCard label="High Series" value={player.stats.highSeries} />*/}
                <StatCard label="Total Money Owed" value={`$${totalMoneyOwed}`}/>
                <StatCard label="Total Orange Pins" value={totalOrangePins}/>
                <StatCard label="Total Games Played" value={gamesPlayed}/>

                {/*<StatCard label="Strike %" value={player.stats.strikePct} />*/}
                {/*<StatCard label="Spare %" value={player.stats.sparePct} />*/}
            </div>

            <div className="main-grid">
                <ScoreTrend games={games}/>
                <ScoreDistribution games={games}/>
            </div>

            {/*<div className="secondary-grid">*/}
            {/*    <PinsPerBall/>*/}
            {/*    <FrameEfficiency/>*/}
            {/*</div>*/}

            {/*<div className="secondary-grid">*/}
            {/*    <PinHeatmap/>*/}
            {/*    <CommonLeaves/>*/}
            {/*</div>*/}

            {/*<div className="secondary-grid">*/}
            {/*    <Records/>*/}
            {/*    <PressureStats/>*/}
            {/*</div>*/}
        </div>
    )
}
