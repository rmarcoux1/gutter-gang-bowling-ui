import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts'

const DATA = [
    { range: '70–80', count: 2 },
    { range: '80–90', count: 5 },
    { range: '90–100', count: 9 },
    { range: '100–110', count: 14 },
    { range: '110–120', count: 11 },
    { range: '120+', count: 5 },
]

export default function ScoreDistribution() {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Score Distribution</h2>
            </div>

            <ResponsiveContainer width="100%" height={260}>
                <BarChart data={DATA}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="range" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="count" radius={[6, 6, 0, 0]} fill="#2563eb"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
