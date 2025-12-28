// src/components/MoneyTable.jsx
export default function MoneyTable({ weeks = [], players = [] }) {
    if (!weeks.length || !players.length) return <p style={{ color: '#F3F4F6' }}>No data available</p>

    // Calculate total money per player
    const totals = {}
    players.forEach(p => {
        totals[p] = weeks.reduce((sum, w) => sum + (w.money?.[p] || 0), 0)
    })

    return (
        <div style={{ background: '#0f172a', padding: '20px', borderRadius: '12px', marginBottom: '40px' }}>
            <h2 style={{ color: '#F3F4F6', marginBottom: '16px' }}>Money Per Person (Weekly)</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                <tr style={{ background: '#1E293B', color: '#F3F4F6' }}>
                    <th style={{ padding: '12px', textAlign: 'center' }}>Week</th>
                    {players.map(p => (
                        <th key={p} style={{ padding: '12px', textAlign: 'center' }}>{p}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {weeks.map(w => (
                    <tr key={w.week} style={{ borderBottom: '1px solid #334155' }}>
                        <td style={{ padding: '12px', textAlign: 'center' }}>Week {w.week}</td>
                        {players.map(p => (
                            <td key={p} style={{ padding: '12px', textAlign: 'center' }}>${w.money?.[p] || 0}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
