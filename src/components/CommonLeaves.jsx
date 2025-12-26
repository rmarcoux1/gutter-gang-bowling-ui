const LEAVES = [
    { label: 'Single Pin 7', count: 7 },
    { label: '2-4-5 Leave', count: 6 },
    { label: '3-6-10 Leave', count: 5 },
    { label: '4-7-8 Leave', count: 4 },
]

const max = Math.max(...LEAVES.map(l => l.count))

export default function CommonLeaves() {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Common Leaves</h2>
            </div>

            <div className="leaves-list">
                {LEAVES.map(l => (
                    <div key={l.label} className="leave-row">
                        <span className="leave-label">{l.label}</span>

                        <div className="leave-bar">
                            <div
                                className="leave-fill"
                                style={{
                                    width: `${(l.count / max) * 100}%`,
                                }}
                            />
                        </div>

                        <span className="leave-count">{l.count}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
