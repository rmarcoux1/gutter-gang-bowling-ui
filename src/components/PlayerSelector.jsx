export default function PlayerSelector({ players, selectedId, onChange }) {
    return (
        <div className="player-selector">
            <label>Player</label>
            <select
                value={selectedId}
                onChange={e => onChange(e.target.value)}
            >
                {players.map(p => (
                    <option key={p.id} value={p.id}>
                        {p.name}
                    </option>
                ))}
            </select>
        </div>
    )
}
