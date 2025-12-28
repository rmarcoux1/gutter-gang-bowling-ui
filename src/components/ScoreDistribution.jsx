import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts'
import { useMemo } from 'react'
import { buildScoreDistribution } from '../utils/stats'

export default function ScoreDistribution({ games = [] }) {
    // Always guarantee an array
    const safeGames = Array.isArray(games) ? games : []

    const data = useMemo(
        () => buildScoreDistribution(safeGames),
        [safeGames]
    )

    // Prevent Recharts from rendering with empty/invalid data
    if (!data || data.length === 0) {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Score Distribution</h2>
                </div>
                <div style={{ padding: '1rem', opacity: 0.6 }}>
                    No game data available
                </div>
            </div>
        )
    }

    return (
        <div className="card">
            <div className="card-header">
                <h2>Score Distribution</h2>
            </div>

            <ResponsiveContainer width="100%" height={260}>
                <BarChart
                    data={data}
                    margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="range" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar
                        dataKey="count"
                        radius={[6, 6, 0, 0]}
                        fill="#2563eb"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
