import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

const DATA = [
    { ball: 'Ball 1', value: 3.8 },
    { ball: 'Ball 2', value: 2.9 },
    { ball: 'Ball 3', value: 1.5 },
]

export default function PinsPerBall() {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Pins Per Ball</h2>
            </div>

            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={DATA}>
                    <XAxis dataKey="ball" />
                    <YAxis domain={[0, 5]} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#1d4ed8" radius={[6, 6, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
