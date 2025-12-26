const RECORDS = [
    { label: 'Highest Game', value: '145' },
    { label: 'Highest Series', value: '385' },
    { label: 'Longest Clean Streak', value: '7 frames' },
    { label: 'Most Strikes (Game)', value: '4' },
]

export default function Records() {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Records & Streaks</h2>
            </div>

            <div className="records-grid">
                {RECORDS.map(r => (
                    <div key={r.label} className="record-item">
                        <div className="record-value">{r.value}</div>
                        <div className="record-label">{r.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
