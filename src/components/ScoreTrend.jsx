import {useMemo, useState} from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts'


function buildTrendData(games, range) {
    if (!games) return []

    let filtered = [...games]

    if (range === 'last10') {
        filtered = filtered.slice(-10)
    }

    if (range === 'season') {
        const currentYear = new Date().getFullYear()
        filtered = filtered.slice(
            g => new Date(g.date).getFullYear() === currentYear
        )
    }

    return filtered.map((g, i) => ({
        game: i+1,
        score: g.total_score,
    }))
}

export default function ScoreTrend({ games }) {
    const [range, setRange] = useState('last10')

    const data = useMemo(
        () => buildTrendData(games, range),
        [games, range]
    )

    return (
        <div className="card">
            <div className="card-header">
                <h2>Score Trend</h2>

                <div className="tabs">
                    {['last10', 'season', 'career'].map(key => (
                        <button
                            key={key}
                            className={range === key ? 'tab active' : 'tab'}
                            onClick={() => setRange(key)}
                        >
                            {key === 'last10' ? 'Last 10' : key.charAt(0).toUpperCase() + key.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <ResponsiveContainer width="100%" height={260}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="game" />
                    <YAxis domain={[80, 160]} />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#1d4ed8"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
