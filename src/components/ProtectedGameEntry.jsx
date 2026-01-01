import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase';
import GameForm from "./GameForm.jsx";
import Login from "./Login.jsx";

export default function ProtectedGameEntry({ players }) {
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session)
            setLoading(false)
        })

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => setSession(session)
        )

        return () => listener.subscription.unsubscribe()
    }, [])

    if (loading) return null

    if (!session) {
        return <Login />
    }

    return <GameForm players={players} />
}
