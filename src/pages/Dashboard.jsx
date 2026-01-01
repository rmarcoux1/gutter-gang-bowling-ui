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



    const FRAMES_PER_GAME = 10


    const totalStrikes = games.reduce((sum, g) => sum + (g.strike_count || 0), 0)
    const totalSpares = games.reduce((sum, g) => sum + (g.spare_count || 0), 0)
    const totalTens = games.reduce((sum, g) => sum + (g.ten_count || 0), 0)

    const strikePercentage =
        games.length === 0
            ? 0
            : (
            games.reduce((sum, g) => sum + (g.strike_count || 0), 0) /
            games.length
        ) * 10;

    const strikePercentageRounded = strikePercentage.toFixed(2)

    const sparePercentage =
        games.length === 0
            ? 0
            : (
                games.reduce((sum, g) => sum + (g.spare_count || 0), 0) /
                (games.length) * 10
            )

    const sparePercentageRounded = sparePercentage.toFixed(2)

    const tensPercentage =
        games.length === 0
            ? 0
            : (
                games.reduce((sum, g) => sum + (g.ten_count || 0), 0) /
                (games.length) * 10
            )

    const tensPercentageRounded = tensPercentage.toFixed(2)

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
                <StatCard label="Average" value={average}/>
                <StatCard label="High Game" value={highScore}/>
                <StatCard label="Total Money Owed" value={`$${totalMoneyOwed}`}/>
                <StatCard label="Total Orange Pins" value={totalOrangePins}/>
                <StatCard label="Games Played" value={gamesPlayed}/>
            </div>
            <div className="stats-grid">
                <StatCard label="Total Strikes" value={totalStrikes}/>
                <StatCard label="Strike Percentage" value={`${strikePercentageRounded}%`}/>
                <StatCard label="Total Spares" value={totalSpares}/>
                <StatCard label="Spare Percentage" value={`${sparePercentageRounded}%`}/>
                <StatCard label="Total Tens" value={totalTens}/>
                <StatCard label="Tens Percentage" value={`${tensPercentageRounded}%`}/>
            </div>

            <div className="main-grid">
                <ScoreTrend games={games}/>
                <ScoreDistribution games={games}/>
            </div>
        </>
    )
}
