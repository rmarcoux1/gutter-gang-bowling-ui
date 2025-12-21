// src/components/BowlerCharts.jsx
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

// Colors for each string
const STRING_COLORS = ['#F87171', '#34D399', '#60A5FA']

export default function BowlerCharts({ weeks = [], players = [] }) {
    if (!weeks.length || !players.length) return <p style={{ color: '#F3F4F6' }}>No data available</p>

    return (
        <div>
            {players.map((player) => {
                const labels = weeks.map(w => `Week ${w.week}`)

                // Each string is its own dataset
                const datasets = [0, 1, 2].map((i) => ({
                    label: `String ${i + 1}`,
                    data: weeks.map(w => w.bowlerStats?.[player]?.strings[i] || 0),
                    backgroundColor: STRING_COLORS[i],
                    borderRadius: 6
                }))

                return (
                    <div
                        key={player}
                        style={{
                            background: '#0f172a',
                            padding: 20,
                            borderRadius: 12,
                            marginBottom: 40
                        }}
                    >
                        <h2 style={{ color: '#F3F4F6', marginBottom: 16 }}>{player} — Strings Per Week</h2>
                        <Bar
                            data={{ labels, datasets }}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: { labels: { color: '#F3F4F6', font: { weight: 'bold' } } },
                                    tooltip: { mode: 'index', intersect: false }
                                },
                                scales: {
                                    x: { ticks: { color: '#F3F4F6' }, grid: { color: '#1E293B' } },
                                    y: { ticks: { color: '#F3F4F6' }, grid: { color: '#1E293B' }, beginAtZero: true }
                                }
                            }}
                        />
                    </div>
                )
            })}
        </div>
    )
}
