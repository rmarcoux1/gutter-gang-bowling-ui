const STATS = [
    { label: '10th Frame Avg', value: 108 },
    { label: 'Fill Ball Avg', value: 92 },
    { label: 'Close Game Win %', value: '61%' },
    { label: 'Turkey Attempts', value: 14 },
]

export default function PressureStats() {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Pressure Stats</h2>
            </div>

            <div className="records-grid">
                {STATS.map(s => (
                    <div key={s.label} className="record-item">
                        <div className="record-value">{s.value}</div>
                        <div className="record-label">{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
