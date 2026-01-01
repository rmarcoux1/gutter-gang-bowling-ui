import { useState } from 'react'
import { supabase } from '../lib/supabase'

const today = new Date().toISOString().split('T')[0]

const INITIAL_FORM = {
    player_id: '',
    date: today,
    total_score: '',
    orange_pins: 0,
    money_owed: 0,
    strike_count: 0,
    spare_count: 0,
    ten_count: 0,
    game_number: 0,
}

export default function GameForm({ players = [], onSaved }) {
    const [form, setForm] = useState(INITIAL_FORM)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    function handleChange(e) {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { error } = await supabase.from('games').insert({
            player_id: form.player_id,
            date: form.date,
            total_score: Number(form.total_score),
            orange_pins: Number(form.orange_pins),
            money_owed: Number(form.money_owed),
            strike_count: Number(form.strike_count),
            spare_count: Number(form.spare_count),
            ten_count: Number(form.ten_count),
            game_number: Number(form.game_number),
        })

        setLoading(false)

        if (error) {
            setError(error.message)
            return
        }

        setForm(INITIAL_FORM)
        onSaved?.()
    }

    return (
        <form onSubmit={handleSubmit} className="form-card">
            <h2 className="form-title">Add Game</h2>

            <div className="form-section">
                <label className="form-label">Player:</label>
                <select
                    name="player_id"
                    value={form.player_id}
                    onChange={handleChange}
                    className="form-input"
                    required
                >
                    <option value="">Select player</option>
                    {players.map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                </select>
            </div>

            <div className="form-section">
                <label className="form-label">Date:</label>
                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
            </div>

            <div className="form-section">
                <label className="form-label">Game Number:</label>

                <select
                    name="game_number"
                    value={form.game_number}
                    onChange={handleChange}
                    className="form-select"
                    required
                >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>

            <div className="form-section">
                <label className="form-label">Score:</label>
                <input
                    type="number"
                    name="total_score"
                    value={form.total_score}
                    onChange={handleChange}
                    className="form-input score"
                    required
                />
            </div>

            <div className="form-section form-stats">
                <StatInput
                    label="Orange Pins:"
                    name="orange_pins"
                    value={form.orange_pins}
                    onChange={handleChange}
                />
                <StatInput
                    label="Strikes:"
                    name="strike_count"
                    value={form.strike_count}
                    onChange={handleChange}
                />
                <StatInput
                    label="Spares:"
                    name="spare_count"
                    value={form.spare_count}
                    onChange={handleChange}
                />
                <StatInput
                    label="Tens:"
                    name="ten_count"
                    value={form.ten_count}
                    onChange={handleChange}
                />
            </div>


            <div className="form-section">
                <label className="form-label">Money Owed:</label>
                <input
                    type="number"
                    step="0.25"
                    name="money_owed"
                    value={form.money_owed}
                    onChange={handleChange}
                    className="form-input"
                />
            </div>

            {error && <div className="form-error">{error}</div>}

            <button className="form-button" disabled={loading}>
                {loading ? 'Saving…' : 'Save Game'}
            </button>
        </form>

    )
}

/* ── Reusable Components ───────────────── */

function FormField({label, children}) {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">
                {label}
            </label>
            {children}
        </div>
    )
}

function StatInput({label, name, value, onChange}) {
    return (
        <div className="space-y-1">
        <label className="text-sm text-gray-600">{label}</label>
            <input
                type="number"
                min="0"
                name={name}
                value={value}
                onChange={onChange}
                className="input text-center font-medium"
            />
        </div>
    )
}
