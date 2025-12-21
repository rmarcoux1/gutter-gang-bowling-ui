// src/components/OrangePinsChart.jsx
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

const COLORS = ['#F87171', '#34D399', '#60A5FA', '#FBBF24', '#A78BFA']

export default function OrangePinsChart({ weeks = [], players = [] }) {
    if (!weeks.length || !players.length) return <p style={{ color: '#F3F4F6' }}>No data available</p>

    const labels = weeks.map(w => `Week ${w.week}`)

    const datasets = players.map((player, i) => ({
        label: player,
        data: weeks.map(w => w.bowlerStats?.[player]?.orangePins || 0),
        backgroundColor: COLORS[i % COLORS.length],
        borderRadius: 6
    }))

    return (
        <div style={{ background: '#0f172a', padding: 20, borderRadius: 12, marginBottom: 40 }}>
            <h2 style={{ color: '#F3F4F6', marginBottom: 16 }}>Orange Pins per Bowler</h2>
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
}
