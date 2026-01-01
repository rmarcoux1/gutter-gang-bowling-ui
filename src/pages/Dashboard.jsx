import PlayerSelector from '../components/PlayerSelector'
import StatCard from '../components/StatsCard'
import ScoreTrend from '../components/ScoreTrend'
import ScoreDistribution from '../components/ScoreDistribution'

export default function Dashboard({
                                      players,
                                      playerId,
                                      setPlayerId,
                                      games,
                                  }) {
    const average =
        games.length > 0
            ? (games.reduce((s, g) => s + g.total_score, 0) / games.length).toFixed(2)
            : '0.00'

    const highScore = games.reduce((max, g) => Math.max(max, g.total_score), 0)
    const gamesPlayed = games.length
    const totalMoneyOwed = games.reduce((sum, g) => sum + (g.money_owed || 0), 0)
    const totalOrangePins = games.reduce((sum, g) => sum + (g.orange_pins || 0), 0)

    return (
        <>
            <div className="header">
                <h1>The Gutter Gang Dashboard</h1>

                <PlayerSelector
                    players={players}
                    selectedId={playerId}
                    onChange={setPlayerId}
                />
            </div>

            <div className="stats-grid">
                <StatCard label="Average" value={average} />
                <StatCard label="High Game" value={highScore} />
                <StatCard label="Total Money Owed" value={`$${totalMoneyOwed}`} />
                <StatCard label="Total Orange Pins" value={totalOrangePins} />
                <StatCard label="Games Played" value={gamesPlayed} />
            </div>

            <div className="main-grid">
                <ScoreTrend games={games} />
                <ScoreDistribution games={games} />
            </div>
        </>
    )
}
