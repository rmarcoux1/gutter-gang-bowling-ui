import { useState} from "react";
import { supabase } from '../lib/supabase'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    async function handleLogin(e) {
        e.preventDefault()
        setError(null)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) setError(error.message)
    }

    return (
        <form onSubmit={handleLogin} className="form-card">
            <h2 className="form-title">Admin Login</h2>

            <input
                type="email"
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                className="form-input"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            {error && <div className="form-error">{error}</div>}

            <button className="form-button">Login</button>
        </form>
    )
}
