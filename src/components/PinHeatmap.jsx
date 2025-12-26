const PINS = [
    [0],
    [1, 2],
    [3, 4, 5],
    [6, 7, 8, 9],
]

const HEAT = {
    0: 2,
    1: 4,
    2: 3,
    3: 6,
    4: 7,
    5: 5,
    6: 8,
    7: 6,
    8: 4,
    9: 3,
}

const max = Math.max(...Object.values(HEAT))

export default function PinHeatmap() {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Pin Leave Heatmap</h2>
            </div>

            <div className="heatmap">
                {PINS.map((row, i) => (
                    <div key={i} className="heat-row">
                        {row.map(pin => {
                            const intensity = HEAT[pin] / max
                            return (
                                <div
                                    key={pin}
                                    className="pin"
                                    style={{
                                        background: `rgba(34,197,94,${intensity})`,
                                    }}
                                >
                                    {pin + 1}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}
