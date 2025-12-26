const METRICS = [
    { label: 'Spare Conversion', value: 72 },
    { label: 'Strike to 10 Box', value: 81 },
    { label: 'Clean Frames', value: 58 },
]

export default function FrameEfficiency() {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Frame Efficiency</h2>
            </div>

            <div className="efficiency-list">
                {METRICS.map(m => (
                    <div key={m.label} className="efficiency-row">
                        <span>{m.label}</span>

                        <div className="efficiency-bar">
                            <div
                                className="efficiency-fill"
                                style={{ width: `${m.value}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
