// src/components/StatsCard.jsx
export default function StatsCard({ title, value }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <div className="value">{value}</div>
        </div>
    )
}
