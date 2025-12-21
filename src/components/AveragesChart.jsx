// src/components/AveragesChart.jsx
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip)

const COLORS = ['#F87171', '#34D399', '#60A5FA', '#FBBF24', '#A78BFA'] // vibrant colors

export default function AveragesChart({ weeks, players }) {
    const labels = weeks.map(w => `Week ${w.week}`)

    const datasets = players.map((player, i) => {
        const playerData = weeks.map(week => {
            const strings = week.bowlerStats[player]?.strings || [0, 0, 0]
            return strings.reduce((sum, s) => sum + s, 0) // total pins per week
        })

        return {
            label: player,
            data: playerData,
            borderColor: COLORS[i % COLORS.length],
            backgroundColor: COLORS[i % COLORS.length] + '55', // semi-transparent fill
            tension: 0.3,
            fill: true,
            pointRadius: 6,
            pointHoverRadius: 8
        }
    })

    return (
        <div style={{ background: '#0f172a', padding: '20px', borderRadius: '12px', marginBottom: '40px' }}>
            <h2 style={{ color: '#F3F4F6', marginBottom: '16px' }}>Total Pins by Bowler</h2>
            <Line
                data={{ labels, datasets }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: { labels: { color: '#F3F4F6', font: { weight: 'bold' } } },
                        tooltip: { mode: 'index', intersect: false }
                    },
                    scales: {
                        x: { ticks: { color: '#F3F4F6' }, grid: { color: '#1E293B' } },
                        y: { ticks: { color: '#F3F4F6' }, grid: { color: '#1E293B' } }
                    }
                }}
            />
        </div>
    )
}
