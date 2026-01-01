import ProtectedGameEntry from '../components/ProtectedGameEntry.jsx'

export default function GameEntry({ players }) {
    return (
        <div className="form-page">
            <h2>Enter New Game</h2>
            <ProtectedGameEntry players={players} />
        </div>
    )
}
