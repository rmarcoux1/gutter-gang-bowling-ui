import { useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts'

const DATA = {
    last10: [
        { game: 1, score: 118 },
        { game: 2, score: 130 },
        { game: 3, score: 122 },
        { game: 4, score: 117 },
        { game: 5, score: 129 },
        { game: 6, score: 138 },
        { game: 7, score: 127 },
        { game: 8, score: 132 },
        { game: 9, score: 121 },
        { game: 10, score: 125 },
    ],
    season: [
        { game: 1, score: 110 },
        { game: 5, score: 120 },
        { game: 10, score: 128 },
        { game: 15, score: 122 },
        { game: 20, score: 130 },
    ],
    career: [
        { game: 1, score: 95 },
        { game: 20, score: 105 },
        { game: 40, score: 112 },
        { game: 60, score: 118 },
        { game: 76, score: 121 },
    ],
}

export default function ScoreTrend() {
    const [range, setRange] = useState('last10')

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
                <LineChart data={DATA[range]}>
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
